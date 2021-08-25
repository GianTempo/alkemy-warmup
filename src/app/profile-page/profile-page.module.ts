import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'
import { ProfilePageComponent } from './profile-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { InlineSVGModule } from 'ng-inline-svg'



@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InlineSVGModule.forRoot()
  ],
  exports: [
    ProfilePageComponent,
    ProfileCardComponent
  ]
})
export class ProfilePageModule { }
