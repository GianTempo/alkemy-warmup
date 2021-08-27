import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-albumcard',
  templateUrl: './albumcard.component.html',
  styleUrls: ['./albumcard.component.scss']
})
export class AlbumcardComponent implements OnInit {

  @Input() album: Album = {
    userId: '',
    id: '',
    title: '',
    photos: []
  }

  @Output() navigateUser:EventEmitter<string> = new EventEmitter<string>();
  @Output() navigateAlbum:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goToUser(userId: string): void {
    this.navigateUser.emit(userId)
  }

  goToAlbum(id: string): void {
    this.navigateAlbum.emit(id)
  }

}
