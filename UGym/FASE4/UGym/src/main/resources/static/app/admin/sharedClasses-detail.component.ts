import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

import {Shared, SharedService} from './sharedClasses.service';


@Component({

    templateUrl: 'app/admin/html/sharedClasses-detail.component.html',
    styleUrls: ['app/css/admin.component.css'],

    directives: [ROUTER_DIRECTIVES,
                 HeaderComponent,
                 NavbarComponent],
})

export class SharedClassesDetailComponent {

    colectiva : Shared;

    constructor(private router:Router, routeParams:RouteParams,private sharedService: SharedService){

        let id = routeParams.get('id');
        if(id){
            this.sharedService.getSharedClase(id).subscribe(
                colectiva => this.colectiva = colectiva,
                error => console.error(error)
            );
        } else {
            this.colectiva = new Shared(undefined,'','','',undefined);
        }
    }

    cancel() {
        window.history.back();
    }

    edit() {
        this.sharedService.editSharedClass(this.colectiva);
        window.alert("La clase colectiva se ha editado de forma correcta");
        window.history.back();
    }

    remove(){
        let respuestaOK = window.confirm("¿Estas seguro que deseas eliminar la clase colectiva?");
        if(respuestaOK){
            this.sharedService.removeActivity(this.colectiva);
            window.history.back();
        }

    }


}
