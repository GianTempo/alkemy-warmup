import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignupPageComponent } from './signup/signup-page/signup-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

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
        path: 'profile/:id',
        component: ProfilePageComponent,
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
        children: [
          /* {
            path: ':id/posts',
            //Implement posts page
          },
          {
            path: ':id/todos',
            //Implement todos page
          },
          {
            path: ':id/albums',
            //implement album page
          } */
        ]
      },
      {
        path: 'users',
        component: UsersPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
