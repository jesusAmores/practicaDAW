import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {IndexComponent} from './index.component'
import {LoginComponent} from './login.component';

import {UserFormComponent} from './user-form.component';

import {AdminComponent} from './admin/admin.component'

import {LoginService} from './login.service';
import {ActivityService} from './activity.service';


@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  providers:  [LoginService, ActivityService,HTTP_PROVIDERS],
  directives: [LoginComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/index', name: 'Index', component: IndexComponent, useAsDefault: true},

  {path: '/admin', name: 'Admin', component: AdminComponent},
  
  {path: '/user/new', name:'UserNew', component: UserFormComponent},

])
export class AppComponent {	
}
