import{Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import{HeaderComponent} from './header.component';
import{NavbarComponent} from './navbar.component';

import{AdminComponent} from './admin.component';

@Component ({
  templateUrl:'app/html/admin-form.component.html',
  styleUrls: ['app/css/admin-form.component.css'],

  directives:[HeaderComponent,
              NavbarComponent,
              ROUTER_DIRECTIVES],
})

export class SharedFormComponent{
    //colectiva: Shared = new Shared('','');
    constructor(private router: Router, routeParams:RouteParams){}
}
