import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AtftModule } from 'atft';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtftModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
