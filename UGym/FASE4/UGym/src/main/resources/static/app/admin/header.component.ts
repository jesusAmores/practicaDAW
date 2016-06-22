import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

@Component({
    
    selector: 'header',
    templateUrl: 'app/admin/html/header.component.html',
    styleUrls: ['app/css/admin.component.css'],
    
    directives:[ROUTER_DIRECTIVES]
})

export class HeaderComponent{
    
    constructor(private router:Router, routeParams:RouteParams){}
}