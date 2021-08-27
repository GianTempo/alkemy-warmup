import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MaterialModule } from '../material.module';
import { TodosModule } from '../todos/todos.module';



@NgModule({
  declarations: [
    PostsPageComponent,
    PostCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TodosModule
  ],
  exports: [
    PostsPageComponent,
    PostCardComponent,
  ]
})
export class PostsModule { }
