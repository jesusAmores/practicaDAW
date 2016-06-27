import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {LoginComponent} from './login.component'


@Component({
    
    selector: 'nav',
    templateUrl: 'app/html/navbar.component.html',
    styleUrls: ['app/css/style.component.css'],
    
    directives:[ROUTER_DIRECTIVES, LoginComponent]
})

export class NavbarComponent {}