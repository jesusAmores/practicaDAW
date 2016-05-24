import {Component} from 'angular2/core';
import {RouteParams, Router,ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

//import {User,UserService} from 'user.service';

@Component({

    templateUrl:'app/admin/html/admin.component.html',
    styleUrls: ['app/css/admin.component.css'],
    directives: [HeaderComponent,
                 NavbarComponent]
    
})

export class AdminComponent {
    
    constructor(private router:Router, routeParams:RouteParams){}
}