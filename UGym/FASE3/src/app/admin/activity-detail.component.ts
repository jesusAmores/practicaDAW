import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

import {Activity,ActivityService} from '../activity.service';


@Component({
    
    templateUrl: 'app/admin/html/activity-detail.component.html',
    styleUrls: ['app/css/admin.component.css'],
    
    directives: [ROUTER_DIRECTIVES,
                 HeaderComponent,
                 NavbarComponent],                
})

export class ActivityDetailComponent {
   
    actividad : Activity;
    
    constructor(private router:Router, routeParams:RouteParams,private activityService: ActivityService){
        
        let id = routeParams.get('id');
        if(id){
            this.activityService.getActivity(id).subscribe(
                actividad => this.actividad = actividad,
                error => console.error(error)
            );
        } else {
            this.actividad = new Activity(undefined,'','','');
        }     
    }

    cancel() {
        window.history.back();
    }
    
    edit() {
        this.activityService.editActivity(this.actividad);
        window.alert("La actividad se ha editado de forma correcta");
        window.history.back();
    }
    
    remove(){
        let respuestaOK = window.confirm("¿Estas seguro que deseas eliminar la aplicación?");
        if(respuestaOK){
            this.activityService.removeActivity(this.actividad);
            window.history.back();
        }    
        
    }
    
    
}