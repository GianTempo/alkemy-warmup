import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { UsersPageComponent } from './users-page.component';
import { ProfilePageModule } from '../profile-page/profile-page.module';




@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProfilePageModule
  ],
  exports: [
    UsersPageComponent
  ]
})
export class UsersPageModule { }
