import{Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterParams, Router} from 'angular2/router';

import{HeaderComponent} from './header.component';
import{NavbarComponent} from './navbar.component';
import{FooterComponent} from './footer.component';

import{Admin, AdminService} from './admin.service';

@Component ({
  templateUrl:'app/html/admin-form.component.html',
  styleUrls: ['app/css/admin-form.component.css'],

  directives:[HeaderComponent,
              FooterComponent,
              ROUTER_DIRECTIVES],
})

export class SharedFormComponent{
    colectiva: shared = new Shared('','');
    constructor(private router: Router, routeParams:RouteParams){}
}
