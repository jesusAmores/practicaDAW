import {Component} from 'angular2/core';

import {Tarifa, TarifaService} from './tarifa.service';

@Component({
    
    selector: 'tarifa',
    templateUrl: 'app/html/tarifa.component.html',
    styleUrls: ['app/css/style.component.css']
})

export class TarifaComponent{
    
    tarifas : Tarifa[];
    tarifa1 : Tarifa;
    tarifa2 : Tarifa;
    tarifa3 : Tarifa;
    
    constructor(private tarifaService: TarifaService){}    

    ngOnInit(){
    
        this.tarifaService.getTarifas().subscribe(
            tarifas => this.tarifas = tarifas,
            error => console.log(error)  
        );
        
        this.tarifa1 = this.tarifas[0];
        this.tarifa2 = this.tarifas[1];
        this.tarifa3 = this.tarifas[2];
        
        /*console.log(this.tarifas);
        console.log(this.tarifa1);
        console.log(this.tarifa2);
        console.log(this.tarifa3);*/
    }      
}