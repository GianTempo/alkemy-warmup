import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module'
import { HomepageComponent } from './homepage/homepage.component';
import { MaterialModule } from '../material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  exports: [
    HomepageComponent,
    NavbarComponent
  ]
})
export class HomepageModule { }
