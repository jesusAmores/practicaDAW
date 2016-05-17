import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Activity, ActivityService}   from './activity.service';

@Component({
  template: `
  <h2>Activity "{{activity.title}}"</h2>
  <div *ngIf="activity.id">
    <label>Id: </label>{{activity.id}}</div>
  <div>
    <label>Title: </label>
    <input [(ngModel)]="activity.title" placeholder="title"/>
  </div>
  <div>
    <label>Description: </label>
    <textarea [(ngModel)]="activity.description" placeholder="description"></textarea>
  </div>
  <p>
    <button (click)="cancel()">Cancel</button>
    <button (click)="save()">Save</button>
  </p>`
})
export class ActivityFormComponent {

  newActivity: boolean;
  activity: Activity;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: ActivityService){

      let id = routeParams.get('id');
      if(id){
        service.getActivity(id).subscribe(
          activity => this.activity = activity,
          error => console.error(error)
        );
        this.newActivity = false;
      } else {
        this.activity = new Activity(undefined,'','');
        this.newActivity = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveActivity(this.activity);
    window.history.back();
  }
}
