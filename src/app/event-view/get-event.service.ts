import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GetEventService {
  private eventsURL = 'api/events';

  constructor(
    private http: HttpClient
  ) 
  { }

}

