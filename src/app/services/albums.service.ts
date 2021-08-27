import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Album, Photo } from '../models/album.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  URL_API = `${environment.BASE_URL_API}/albums`
  USER_URL_API = `${environment.BASE_URL_API}/users`

  constructor (
    private http: HttpClient,
    private userSvc:UserService
  ) {
    this.setLoggedUserAlbums()
   }

  getAlbums():Observable<Album[]> {
    return new Observable<Album[]>(observer => {
      let albums: Album[] = [];
      this.http.get<Album[]>(this.URL_API).subscribe(res => {
        res.forEach(
          album => {
            this.getPhotosFromAlbum(album.id).subscribe(
            res => album.photos = res
            )
            albums.push(album)
        }
        )
        observer.next(albums)
        observer.complete()
      })
    })
  }

  getAlbumById(albumId: string) {
    return new Observable<Album>(observer => {
      let album: Album = {
        userId: '',
      id: '',
      title: '',
      photos: []
      }
      this.http.get<Album>(`${this.URL_API}/${albumId}`).subscribe(res => {
        const { userId, id, title } = res
        album.userId = userId
        album.id = id
        album.title = title
        this.getPhotosFromAlbum(albumId).subscribe(res => {
          album.photos = res
          observer.next(album)
          observer.complete()
        })
      })
    })
  }

  getAlbumByUserId(userId: string): Observable<Album[]> {
    return new Observable<Album[]>(observer => {
      let albums: Album[] = [];
      this.http.get<Album[]>(`${this.USER_URL_API}/${userId}/albums`).subscribe(res => {
        res.forEach(
          album => {
            this.getPhotosFromAlbum(album.id).subscribe(
            res => album.photos = res
            )
            albums.push(album)
        }
        )
        observer.next(albums)
        observer.complete()
      })
    })
  }

  getPhotosFromAlbum(albumId: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.URL_API}/${albumId}/photos`)
  }

  setLoggedUserAlbums(): void {
    let user = this.userSvc.getUser()
    this.getAlbumByUserId(user.id.toString()).subscribe(res => {
      localStorage.userAlbums = JSON.stringify(res)
    })
  }

  getLoggedUserAlbums(): Album[] {
    let albums = JSON.parse(localStorage.userAlbums)
    return albums
  }

  addAlbum(album:Album): void {
    let albums: Album[] = JSON.parse(localStorage.userAlbums)
    albums.push(album)
    localStorage.userAlbums = JSON.stringify(albums)
  }

  removeAlbum(albumId: string): void {
    let albums: Album[] = JSON.parse(localStorage.userAlbums)
    albums.filter(album => album.id !== albumId)
    localStorage.userAlbums = JSON.stringify(albums)
  }

  editAlbum(newAlbum: Album): void {
    let albums: Album[] = JSON.parse(localStorage.userAlbums)
    let newAlbums = albums.map(al => {
      al.id === newAlbum.id ? al = newAlbum : null
    })
    localStorage.userAlbums = JSON.stringify(newAlbums)
  }
}
