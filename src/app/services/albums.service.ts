import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Album, Photo } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  URL_API = `${environment.BASE_URL_API}/albums`
  USER_URL_API = `${environment.BASE_URL_API}/users`

  constructor (private http: HttpClient) { }

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
}
