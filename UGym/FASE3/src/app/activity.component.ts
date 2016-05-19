import {Component,OnInit} from 'angular2/core';

import {Activity,ActivityService} from './activity.service';

@Component({
    
    selector: 'activity',
    templateUrl: 'app/html/activity.component.html',
    styleUrls: ['app/css/style.component.css']
})

export class ActivityComponent{
    
    actividades : Activity[];
    
    constructor(private activityService: ActivityService){}

    ngOnInit(){
    
        this.activityService.getActividades().subscribe(
            actividades => this.actividades = actividades,
            error => console.log(error)  
        );
        console.log(this.actividades);
    }    
}