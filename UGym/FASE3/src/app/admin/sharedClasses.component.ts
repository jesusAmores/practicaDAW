import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {Shared, SharedService} from './sharedClasses.service';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

@Component({

  templateUrl:'app/admin/html/sharedClasses.component.html',
  styleUrls: ['app/css/admin.component.css'],

  directives: [ROUTER_DIRECTIVES,
               HeaderComponent,
               NavbarComponent],

})

export class SharedClassesComponent{

  colectivas: Shared[];

  clase : Shared = new Shared(undefined, " "," "," ",undefined);

  constructor(private sharedService: SharedService){}

  ngOnInit(){
    this.sharedService.getSharedClasses().subscribe(
      colectivas => this.colectivas = colectivas,
      error => console.log(error)
    );
    console.log(this.colectivas);
  }

  addClase(){
          this.sharedService.addSharedClass(this.clase);
          window.alert("La clase se ha añadido de forma correcta");
          this.clase = new Shared(undefined," "," ",undefined,undefined);
          console.log(this.colectivas);
      }


}
