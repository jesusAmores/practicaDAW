import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

import {Activity,ActivityService} from '../activity.service';

@Component({
    selector: 'activities',
    templateUrl: 'app/admin/html/activity.component.html',
    styleUrls: ['app/css/admin.component.css'],
    
    directives: [ROUTER_DIRECTIVES,
                 HeaderComponent,
                 NavbarComponent]
})

export class ActivityComponent{

    actividades : Activity[];

    actividad : Activity = new Activity(undefined,'','','');

    constructor(private router:Router, routeParams:RouteParams,private activityService: ActivityService){}

    ngOnInit(){
        this.activityService.getActividades().subscribe(
            actividades => this.actividades = actividades,
            error => console.log(error)
        );
        console.log(this.actividades);
    }

    addActivity(){
        this.activityService.addActivity(this.actividad);
        window.alert("La actividad se ha añadido de forma correcta");
        this.actividad = new Activity(undefined,'','','');
        console.log(this.actividades);
    }
}
