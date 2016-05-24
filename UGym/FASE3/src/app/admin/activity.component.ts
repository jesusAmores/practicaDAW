import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

import {Activity,ActivityService} from '../activity.service';

@Component({
    
    templateUrl: 'app/admin/html/activity.component.html',
    styleUrls: ['app/css/admin.component.css'],
    
    directives: [ROUTER_DIRECTIVES,
                 HeaderComponent,
                 NavbarComponent]
    
})

export class ActivityComponent{
    
    constructor(private router:Router, routeParams:RouteParams,private activityService: ActivityService){}
    
    actividades : Activity[];
    
    actividad : Activity = new Activity(0,'','','');

    ngOnInit(){
    
        this.activityService.getActividades().subscribe(
            actividades => this.actividades = actividades,
            error => console.log(error)  
        );
        console.log(this.actividades);
    }
    
    addActivity(){
        this.activityService.addActivity(this.actividad);
        console.log(this.actividades);
    }    
}