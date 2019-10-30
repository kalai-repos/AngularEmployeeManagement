import { Component, Input } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowIndicator = true;
  // tslint:disable-next-line:variable-name
  constructor(private _route: Router) {
    this._route.events.subscribe((routeEvent: Event) => {
      if (routeEvent instanceof NavigationStart) {
        this.isShowIndicator = true;
      }
      if (routeEvent instanceof NavigationEnd) {
        this.isShowIndicator = false;
      }
    });
  }
}
