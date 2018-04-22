import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  nav : NavComponent;

  constructor(){
    this.nav = new NavComponent;
    this.nav.open();
  }

  toggle() {
    console.log('test');
    var a = new NavComponent;
    a.items[0] =
    {
      name: 'SWITCH WORKS',
      route: ''
    };
    a.toggle();
  }
}
