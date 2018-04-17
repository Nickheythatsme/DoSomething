import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearYouComponent } from './near-you/near-you.component';
import { NavComponent } from './nav/nav.component';
import { EventViewComponent } from './event-view/event-view.component';

const routes: Routes = [
  {
    path:'',
    component:NearYouComponent
  },
  {
    path:'event',
    component:EventViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
