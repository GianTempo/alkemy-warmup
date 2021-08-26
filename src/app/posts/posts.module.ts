import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    PostsPageComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class PostsModule { }
