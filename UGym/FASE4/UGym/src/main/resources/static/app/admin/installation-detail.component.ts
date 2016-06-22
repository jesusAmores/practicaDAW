import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

import {Installation,InstallationService} from '../installation.service';


@Component({

    templateUrl: 'app/admin/html/installation-detail.component.html',
    styleUrls: ['app/css/admin.component.css'],

    directives: [ROUTER_DIRECTIVES,
                 HeaderComponent,
                 NavbarComponent],
})

export class InstallationDetailComponent {



    installation : Installation;

    constructor(private router:Router, routeParams:RouteParams,private installationService: InstallationService){

        let id = routeParams.get('id');
        if(id){
            this.installationService.getInstallation(id).subscribe(
            installation => this.installation = installation,
            error => console.error(error)
        );
      } else {
        this.installation = new Installation(undefined,'','','');
      }
    }

    cancel() {
        window.history.back();
    }

    edit() {
        this.installationService.editInstallation(this.installation);
        window.alert("La instalación se ha editado de forma correcta");
        window.history.back();
    }

    remove(){
        let respuestaOK = window.confirm("¿Estas seguro que deseas eliminar la instalación?");
        if(respuestaOK){
            this.installationService.removeInstallation(this.installation);
            window.history.back();
        }

    }


}
