import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

import {Tarifa,TarifaService} from '../tarifa.service';

@Component({
    
    selector: 'tarifas',
    templateUrl: 'app/admin/html/tarifa.component.html',
    styleUrls: ['app/css/admin.component.css'],
    
     directives: [ROUTER_DIRECTIVES,
                 HeaderComponent,
                 NavbarComponent]
})

export class TarifaComponent{
    
    constructor(private router:Router, routeParams:RouteParams,private tarifaService: TarifaService){}    

    tarifas : Tarifa[];
    
    tarifa : Tarifa = new Tarifa(undefined,'',undefined,'');
    
    ngOnInit(){
        this.tarifaService.getTarifas().subscribe(
            tarifas => this.tarifas = tarifas,
            error => console.log(error)
        );
        console.log(this.tarifas);
    }
    
    addTarifa(){
        this.tarifaService.addTarifa(this.tarifa);
        window.alert("La tarifa se ha añadido de forma correcta");
        this.tarifa = new Tarifa(undefined,'',undefined,'');
        console.log(this.tarifas);
    }
}