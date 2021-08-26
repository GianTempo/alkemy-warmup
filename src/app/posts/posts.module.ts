import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostCardComponent } from './post-card/post-card.component';



@NgModule({
  declarations: [
    PostsPageComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule
  ],
})
export class PostsModule { }
