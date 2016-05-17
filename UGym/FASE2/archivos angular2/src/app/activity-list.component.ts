import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Activity, ActivityService}   from './activity.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Activities</h2>
    <ul class="items">
      <li *ngFor="#activity of activities">
        <a [routerLink]="['ActivityDetail', {id: activity.id}]">{{activity.title}}</a>
      </li>
    </ul>
    <button (click)="newActivity()">New activity</button>
  `
})
export class ActivityListComponent implements OnInit {

    activities: Activity[];

    constructor(private router:Router, private service: ActivityService) {}

    ngOnInit(){
      this.service.getActivities().subscribe(
        activities => this.activities = activities,
        error => console.log(error)
      );
    }

    newActivity() {
      this.router.navigate(['ActivityNew']);
    }
}
