import {Component,OnInit} from 'angular2/core';
import {RouteParams, Router,ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

@Component({

    templateUrl:'app/admin/html/admin.component.html',
    styleUrls: ['app/css/admin.component.css'],
    
    directives: [HeaderComponent,
                 NavbarComponent]
                 /*ActivityComponent,
                 ShopComponent]*/

})


export class AdminComponent {

}