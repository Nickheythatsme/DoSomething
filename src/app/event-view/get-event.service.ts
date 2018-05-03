import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { event } from './event';

@Injectable()
export class GetEventService {
  private eventsURL = 'api/events';
  public current : event;
  private http: HttpClient;

  constructor(
  ) 
  {
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

}

