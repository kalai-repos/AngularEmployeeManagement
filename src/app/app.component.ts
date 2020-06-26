import { Component, Input, OnInit, ApplicationRef } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isShowIndicator = true;
  // tslint:disable-next-line:variable-name
  constructor(private _route: Router, private swUpdate: SwUpdate, private appRef: ApplicationRef) {
    this._route.events.subscribe((routeEvent: Event) => {
      if (routeEvent instanceof NavigationStart) {
        this.isShowIndicator = true;
      }
      if (routeEvent instanceof NavigationEnd) {
        this.isShowIndicator = false;
      }
    });
  }
  ngOnInit(): void {
    this.updatesv();
  }
  updatesv() {
    if (this.swUpdate.isEnabled) {
      console.log('not enabled');
      return;
    }
    this.swUpdate.available.subscribe((event) => {
      console.log('current', event.current, 'avilable', event.available);
      if (confirm('update availabe need to refresh the page')) {
        this.swUpdate.activateUpdate().then(() => location.reload());
      }
    });
  }

  checkupdate() {
    this.appRef.isStable.subscribe((isstable) => {
      if (isstable) {
        const timeInterval = interval(20000);
        timeInterval.subscribe(() => {
          this.swUpdate.checkForUpdate().then(() => {
            console.log('update now');
          });
        });
      }
    });
  }
}
