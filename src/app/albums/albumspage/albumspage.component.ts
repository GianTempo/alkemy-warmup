import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/models/album.model';
import { AlbumsService } from 'src/app/services/albums.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-albumspage',
  templateUrl: './albumspage.component.html',
  styleUrls: ['./albumspage.component.scss']
})
export class AlbumspageComponent implements OnInit {

  albums: Album[] = []
  album: Album = {
    userId: '',
    id: '',
    title: '',
    photos: []
  }
  mode:string = ''

  constructor (
    private albumSvc: AlbumsService,
    private userSvc: UserService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      if (param.has('id')) {
        this.mode = 'show'
        let id = param.get('id') as string
        this.albumSvc.getAlbumById(id).subscribe(res => {
          this.album = res
        })
      }
      else {
        this.albumSvc.getAlbums().subscribe(res => {
          let user = this.userSvc.getUser()
          this.albums = res.filter(res => Number(res.userId) !== user.id)
          console.log(this.albums)
        })
      }
    }
    )
  }

  navigateUser(e:any) {
    this.router.navigate(['profile', e])
  }
  navigateAlbum(e:any) {
    this.router.navigate(['albums', e])
  }

}
