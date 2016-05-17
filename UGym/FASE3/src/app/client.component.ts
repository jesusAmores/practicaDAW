import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {User,UserService} from './user.service';

@Component({

    templateUrl:'app/html/client.component.html',
    styleUrls: ['app/css/client.component.css']
    
})

export class ClientComponent {
    
    constructor(private router:Router, routeParams:RouteParams){}
}