import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumspageComponent } from './albumspage/albumspage.component';
import { AlbumcardComponent } from './albumcard/albumcard.component';
import { MaterialModule } from '../material.module';
import { PhotosComponent } from './photos/photos.component';



@NgModule({
  declarations: [
    AlbumspageComponent,
    AlbumcardComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AlbumspageComponent,
  ]
})
export class AlbumsModule { }
