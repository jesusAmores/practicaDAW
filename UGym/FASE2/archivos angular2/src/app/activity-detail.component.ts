import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Activity, ActivityService}   from './activity.service';

@Component({
    template: `
  <h2>Activity "{{activity.title}}"</h2>
  <div>
    <p>{{activity.abstract}}</p>
  </div>
  <p>
    <button (click)="removeActivity()">Remove</button>
    <button (click)="editActivity()">Edit</button>
    <br>
    <button (click)="gotoActivities()">All Activities</button>
  </p>`
})
export class ActivityDetailComponent {

    activity: Activiy;

    constructor(private router: Router, routeParams: RouteParams, private service: ActiviyService) {
        let id = routeParams.get('id');
        service.getActiviy(id).subscribe(
            activity => this.activity = activity,
            error => console.error(error)
        );
    }

    removeActivity() {
        let okResponse = window.confirm("Do you want to remove this activity?");
        if (okResponse) {
            this.service.removeActivity(this.activity).subscribe(
                _ => this.router.navigate(['Activities']),
                error => console.error(error)
            )
        }
    }

    editActivity() {
        this.router.navigate(['ActivityEdit', { id: this.activity.id }]);
    }

    gotoActivity() {
        this.router.navigate(['Activities']);
    }
}
