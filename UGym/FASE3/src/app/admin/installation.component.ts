import {Component} from 'angular2/core';

//import {Activity,ActivityService} from './activity.service';
import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

@Component({
    
    templateUrl: 'app/admin/html/installation.component.html',
    styleUrls: ['app/css/admin.component.css'],
    
    directives: [HeaderComponent,
                 NavbarComponent]
    
})

export class InstallationComponent{}