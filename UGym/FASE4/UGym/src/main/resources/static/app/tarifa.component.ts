import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Tarifa, TarifaService} from './tarifa.service';
import {LoginService}   from './login.service';

@Component({
    
    selector: 'tarifa',
    templateUrl: 'app/html/tarifa.component.html',
    styleUrls: ['app/css/style.component.css'],
    directives: [ROUTER_DIRECTIVES],
})

export class TarifaComponent{

	tarifas : Tarifa[];

  tarifa1 : Tarifa;
  tarifa2 : Tarifa;
  tarifa3 : Tarifa;

	constructor(private router:Router, private activityService: TarifaService, private loginService:LoginService) {}

	ngOnInit(){
    
      this.activityService.getTarifas().subscribe(
        tarifas => this.tarifas = tarifas,
        error => console.log(error)
      );

      this.tarifa1 = this.tarifas[0];
      this.tarifa2 = this.tarifas[1];
      this.tarifa3 = this.tarifas[2];

      console.log(this.tarifas);
      console.log(this.tarifa1);
      console.log(this.tarifa2);
      console.log(this.tarifa3);

    }
}