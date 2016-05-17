import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {IndexComponent} from './index.component';
import {UserService} from './user.service';
import {AdminComponent} from './admin.component';
import {ClientComponent} from './client.component';

@Component({
    
    selector: 'app' ,
    template: '<router-outlet></router-outlet>',
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    
    {path: '/index', name:'Index', component: IndexComponent, useAsDefault:true},
    {path: '/admin', name:'Admin', component: AdminComponent},
    {path: '/client', name:'Client', component: ClientComponent}
    
])

export class AppComponent { }


