import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items = [
    {
      name: 'Near You',
      route: ''
    },
    {
      name: 'Test Event',
      route: 'event'
    },
    {
      name: 'test',
      route: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  close() {
    console.log('close');
  }
  open() {
    console.log('open');
  }
  toggle() {
    console.log('toggle');
  }

}
