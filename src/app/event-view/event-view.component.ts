import { Component, OnInit } from '@angular/core';
import { event } from './event';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {
  public current: event;

  constructor() { 
    this.current = new event(
      'Test title event!',
      'Nicholas Grout',
      'This is a game of ultimate frisbee in the park under the St. Johns bridge',
      'frisbee',
      new Date('Dec 25 2018 12:13:13 GMT-0700 (Pacific Daylight Time)'),
      new Date(),
      ['fun','guys/girls','frisbee','non-competitive'],
      {name: 'St. Johns park', latitude: 100, longitude: 100},
      true
    )
  }

  ngOnInit() {
  }

}
