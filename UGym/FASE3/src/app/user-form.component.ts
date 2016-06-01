import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';
import {FooterComponent} from './footer.component';

import {User,UserService} from './user.service';

@Component({
   
  templateUrl: 'app/html/user-form.component.html',
  styleUrls: ['app/css/user-form.component.css'],
  
  directives:[HeaderComponent,
              FooterComponent,
              ROUTER_DIRECTIVES], 
})

export class UserFormComponent {

        usuario:User = new User('','');
        
        constructor(private router:Router, routeParams:RouteParams, private userService:UserService){}
        
         
}