import {Component,OnInit} from 'angular2/core';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';
import {ActivityComponent} from './activity.component';
import {InstallationComponent} from './installation.component';
import {TarifaComponent} from './tarifa.component';
import {GalleryComponent} from './gallery.component';
import {SocioComponent} from './socio.component';
import {FooterComponent} from './footer.component';

import {User,UserService} from './user.service';

@Component({
    
    templateUrl: 'app/html/index.component.html',
    styleUrls: ['app/css/style.component.css'],
    
    directives:[HeaderComponent,
                NavbarComponent,
                ActivityComponent,
                InstallationComponent,
                TarifaComponent,
                GalleryComponent,
                SocioComponent,
                FooterComponent]  
})

export class IndexComponent { }