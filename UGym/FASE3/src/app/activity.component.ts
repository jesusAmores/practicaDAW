import {Component,OnInit} from 'angular2/core';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';
import {InstallationComponent} from './installation.component';
import {TarifaComponent} from './tarifa.component';
import {GalleryComponent} from './gallery.component';
import {SocioComponent} from './socio.component';
import {FooterComponent} from './footer.component';

import {Activity,ActivityService} from './activity.service';

@Component({
    
    selector: 'activity',
    templateUrl: 'app/html/activity.component.html',
    styleUrls: ['app/css/style.component.css'],
    
    directives:[HeaderComponent,
                NavbarComponent,
                InstallationComponent,
                TarifaComponent,
                GalleryComponent,
                SocioComponent,
                FooterComponent]  
})

export class ActivityIndexComponent{
    
    actividades : Activity[];
    actividad1 : Activity;
    actividad2 : Activity;
    actividad3 : Activity;
    actividad4 : Activity;
    
    constructor(private activityService: ActivityService){}

    ngOnInit(){
    
        this.activityService.getActividades().subscribe(
            actividades => this.actividades = actividades,
            error => console.log(error)  
        );
        
        this.actividad1 = this.actividades[0];
        this.actividad2 = this.actividades[1];
        this.actividad3 = this.actividades[2];
        this.actividad4 = this.actividades[3];

        /*console.log(this.actividades);
        console.log(this.actividad1);
        console.log(this.actividad2);
        console.log(this.actividad3);
        console.log(this.actividad4);*/
    }    
}