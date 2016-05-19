import {Component} from 'angular2/core';
import {RouteParams, Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {User,UserService} from './user.service';

@Component({

    templateUrl:'app/html/admin.component.html',
    styleUrls: ['app/css/admin.component.css'],
    directives: [ROUTER_DIRECTIVES]
    
})

export class AdminComponent {
    
    constructor(private router:Router, routeParams:RouteParams){}
}