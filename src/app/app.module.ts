import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NearYouComponent } from './near-you/near-you.component';
import { EventViewComponent } from './event-view/event-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NearYouComponent,
    EventViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
