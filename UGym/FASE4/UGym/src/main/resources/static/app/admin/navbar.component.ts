import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
//import {ShopComponent} from './shop.component';

//import {ActivityComponent} from './activity.component';

//import {User,UserService} from './user.service';

@Component({

    selector: 'nav',
    templateUrl: 'app/admin/html/navbar.component.html',
    styleUrls: ['app/css/admin.component.css'],

    directives:[ROUTER_DIRECTIVES]
})

export class NavbarComponent {

    constructor(private router:Router, routeParams:RouteParams){}
}
