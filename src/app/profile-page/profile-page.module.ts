import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'
import { ProfilePageComponent } from './profile-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { UserdataComponent } from './userdata/userdata.component'
import { AppRoutingModule } from '../app-routing.module';
import { PostService } from '../services/post.service';
import { PostsModule } from '../posts/posts.module';
import { AlbumsModule } from '../albums/albums.module';
import { TodosModule } from '../todos/todos.module';



@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileCardComponent,
    UserdataComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InlineSVGModule.forRoot(),
    AppRoutingModule,
    PostsModule,
    AlbumsModule,
    TodosModule
  ],
  exports: [
    ProfilePageComponent,
    ProfileCardComponent,
    UserdataComponent
  ]
})
export class ProfilePageModule { }
