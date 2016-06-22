import  {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';
import {Installation, InstallationService}   from '../installation.service';



@Component({

    selector: 'installations',
    templateUrl: 'app/admin/html/installation.component.html',
    styleUrls: ['app/css/admin.component.css'],
    directives: [ROUTER_DIRECTIVES,
                HeaderComponent,
                NavbarComponent]

})
export class InstallationComponent{

    installations : Installation[];

    installation :Installation = new Installation(undefined,'','','');

    constructor(private router:Router, routeParams:RouteParams,private installationService: InstallationService){}

  ngOnInit(){
        this.installationService.getInstallations().subscribe(
            installations => this.installations = installations,
            error => console.log(error)
        );
        console.log(this.installations);
    }
    addInstallation(){
        this.installationService.addInstallation(this.installation);
        window.alert("La instalación se ha añadido de forma correcta");
        this.installation = new Installation(undefined,'','','');
        console.log(this.installations);
    }
}
