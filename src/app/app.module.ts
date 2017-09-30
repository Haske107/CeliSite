import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MainGridComponent } from './main-grid/main-grid.component';
import { ItempageComponent } from './itempage/itempage.component';
import {AppRouter} from "./app.router";
import {AlertModule} from "ngx-bootstrap";
import {MdButtonModule, MdCardModule, MdGridListModule, MdIconModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MainGridComponent,
    ItempageComponent,

  ],
  imports: [
      BrowserModule,
      AppRouter,AlertModule.forRoot(),
      MdCardModule, MdButtonModule, MdIconModule, MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
