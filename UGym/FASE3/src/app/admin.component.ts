import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {User,UserService} from './user.service';

@Component({

    templateUrl:'app/html/admin.component.html',
    styleUrls: ['app/css/admin.component.css']
    
})

export class AdminComponent {
    
    constructor(private router:Router, routeParams:RouteParams){}
}