import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IndexComponent} from './index.component';

import {ClientComponent} from './client.component';

import {UserFormComponent} from './user-form.component';


import {UserService} from './user.service';
import {ActivityService} from './activity.service';

/*COMPONENTES DE LA CARPETA ADMIN */
import {AdminComponent} from './Admin/admin.component';
import {SharedClassesComponent} from './admin/sharedClasses.component';
import {ShopComponent} from './admin/shop.component';
import {InstallationComponent} from './admin/installation.component';
import {ActivityComponent} from './admin/activity.component';




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
    
    {path: '/user/new', name:'UserNew', component: UserFormComponent},
    
    /*NAVEGACION POR LA PAGINA DEL ADMIN*/
    {path: '/admin/shared-classes', name:'AdminSharedClasses', component: SharedClassesComponent},
    {path: '/admin/shop', name:'AdminShop', component: ShopComponent},
    {path: '/admin/installation', name:'AdminInstallation', component: InstallationComponent},
    {path: '/admin/activities', name:'AdminActivities', component: ActivityComponent},
    
    
    
    //{path: '/activity/new', name:'ActivityNew', component: ActivityFormComponent},
    
    
])

export class AppComponent { }


