import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowempdataComponent } from './showempdata/showempdata.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowempdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
