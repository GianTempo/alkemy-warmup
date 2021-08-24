//Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Other modules imports
import { MaterialModule } from './material.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    SignupModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
