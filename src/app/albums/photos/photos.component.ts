import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Input() album: Album = {
    userId: '',
    id: '',
    title: '',
    photos: []
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.album)
  }

}
