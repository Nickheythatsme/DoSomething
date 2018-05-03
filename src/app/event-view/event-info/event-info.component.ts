import { Component, OnInit } from '@angular/core';
import { GetEventService } from '../get-event.service';
import { event } from '../event';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {
  public current : event;
  private getEvent : GetEventService;

  constructor() { 
    this.getEvent = new GetEventService();
    this.current = this.getEvent.current;
  }

  ngOnInit() {
  }

}
