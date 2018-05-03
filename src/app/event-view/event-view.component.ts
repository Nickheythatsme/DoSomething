import { Component, OnInit } from '@angular/core';
import { event } from './event';
import { GetEventService } from './get-event.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {
  public current : event;
  private getEvent : GetEventService;

  constructor() { 
    this.getEvent = new GetEventService();
    this.current = this.getEvent.current;
  }

  ngOnInit() {
  }

}
