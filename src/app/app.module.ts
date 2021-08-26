//Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InlineSVGModule } from 'ng-inline-svg'
import { HttpClientModule } from '@angular/common/http';

//Other modules imports
import { MaterialModule } from './material.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { UsersPageModule } from './users-page/users-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    SignupModule,
    ProfilePageModule,
    UsersPageModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
