import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IndexComponent} from './index.component';
import {AdminComponent} from './admin.component';
import {ClientComponent} from './client.component';
import {UserFormComponent} from './user-form.component';

import {UserService} from './user.service';
import {ActivityService} from './activity.service';
import {ActivityComponent} from './activity.component';

@Component({
    
    selector: 'app' ,
    template: '<router-outlet></router-outlet>',
    providers: [UserService,ActivityService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    
    {path: '/index', name:'Index', component: IndexComponent, useAsDefault:true},
    {path: '/admin', name:'Admin', component: AdminComponent},
    {path: '/client', name:'Client', component: ClientComponent},
    
    {path: '/user/new', name:'UserNew', component: UserFormComponent}
    
])

export class AppComponent { }


