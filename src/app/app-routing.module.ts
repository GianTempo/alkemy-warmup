import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignupPageComponent } from './signup/signup-page/signup-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { PostsPageComponent } from './posts/posts-page/posts-page.component';
import { TodospageComponent } from './todos/todospage/todospage.component';
import { AlbumspageComponent } from './albums/albumspage/albumspage.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: '',
    component: HomepageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
      {
        path: 'profile/:id',
        component: ProfilePageComponent,
        children: [
          {
            path: 'posts',
            component: PostsPageComponent,
          },
          {
            path: 'albums',
            component: AlbumspageComponent,
          },
          {
            path: 'todos',
            component: TodospageComponent,
          },
        ]
      },
      {
        path: 'users',
        component: UsersPageComponent
      },
      {
        path: 'posts',
        component: PostsPageComponent
      },
      {
        path: 'post/:id',
        component: PostsPageComponent
      },
      {
        path: 'todos',
        component: TodospageComponent
      },
      {
        path: 'albums',
        component: AlbumspageComponent
      },
      {
        path: 'albums/:id',
        component: AlbumspageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
