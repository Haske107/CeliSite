import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MainGridComponent } from './main-grid/main-grid.component';
import { ItempageComponent } from './itempage/itempage.component';
import {AppRouter} from "./app.router";
import {AlertModule} from "ngx-bootstrap";
import {MatTooltipModule, MatCardModule, MatButtonModule, MatIconModule, MatGridListModule, MatSidenavModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MainGridComponent,
    ItempageComponent,
    InfoDialogComponent
  ],
  imports: [
      BrowserAnimationsModule,
      BrowserModule,
      AppRouter,AlertModule.forRoot(),
      MatCardModule, MatButtonModule, MatIconModule, MatGridListModule,MatTooltipModule, MatSidenavModule
  ],
    entryComponents: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
