import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

import {Tarifa,TarifaService} from '../tarifa.service';


@Component({
    
    templateUrl: 'app/admin/html/tarifa-detail.component.html',
    styleUrls: ['app/css/admin.component.css'],
    
    directives: [ROUTER_DIRECTIVES,
                 HeaderComponent,
                 NavbarComponent],                
})

export class TarifaDetailComponent {

    tarifa : Tarifa;
    
    constructor(private router:Router, routeParams:RouteParams,private tarifaService: TarifaService){
        
        let id = routeParams.get('id');
        if(id){
            this.tarifaService.getTarifa(id).subscribe(
            tarifa => this.tarifa = tarifa,
            error => console.error(error)
        );
      } else {
        this.tarifa = new Tarifa(undefined,'',undefined,'');
      }     
    }

    cancel() {
        window.history.back();
    }
    
    edit() {
        this.tarifaService.editTarifa(this.tarifa);
        window.alert("La tarifa se ha editado de forma correcta");
        window.history.back();
    }
    
    remove(){
        let respuestaOK = window.confirm("¿Estas seguro que deseas eliminar la tarifa");
        if(respuestaOK){
            this.tarifaService.removeTarifa(this.tarifa);
            window.history.back();
        }    
    }
}