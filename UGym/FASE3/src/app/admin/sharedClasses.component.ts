import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {Shared, SharedService} from './sharedClasses.service';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

@Component({
  
  templateUrl:'app/html/shared.component.html',
  styleUrls: ['app/css/admin.component.css'],

  directives: [ROUTER_DIRECTIVES,
               HeaderComponent,
               NavbarComponent], 

})

export class SharedClassesComponent{
  
  colectivas: Shared[];
  
  constructor(private sharedService: SharedService){}
  
  ngOnInit(){
    this.sharedService.getSharedClasses().subscribe(
      colectivas => this.colectivas = colectivas,
      error => console.log(error)
    );
    console.log(this.colectivas);
  }
}
