import {Component,OnInit} from 'angular2/core';

import {Activity,ActivityService} from './activity.service';

@Component({
    
    selector: 'activity',
    templateUrl: 'app/html/activity.component.html',
    styleUrls: ['app/css/style.component.css']
})

export class ActivityComponent{
    
    actividades : Activity[];
    actividad1 : Activity;
    actividad2 : Activity;
    actividad3 : Activity;
    actividad4 : Activity;
    
    constructor(private activityService: ActivityService){
        
        
    }

    ngOnInit(){
    
        this.activityService.getActividades().subscribe(
            actividades => this.actividades = actividades,
            error => console.log(error)  
        );
        
        this.activityService.getActivity(1).subscribe(
            actividad1 => this.actividad1 = actividad1,
            error => console.log(error)
        );
        
        this.activityService.getActivity(2).subscribe(
            actividad2 => this.actividad2 = actividad2,
            error => console.log(error)
        );
        
        this.activityService.getActivity(3).subscribe(
            actividad3 => this.actividad3 = actividad3,
            error => console.log(error)
        );
        
        this.activityService.getActivity(4).subscribe(
            actividad4 => this.actividad4 = actividad4,
            error => console.log(error)
        );
        
        
        console.log(this.actividad1);
    }    
}