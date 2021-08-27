import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumspageComponent } from './albumspage/albumspage.component';
import { AlbumcardComponent } from './albumcard/albumcard.component';



@NgModule({
  declarations: [
    AlbumspageComponent,
    AlbumcardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlbumsModule { }
