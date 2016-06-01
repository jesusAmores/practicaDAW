import {Component, OnInit}   from 'angular2/core';
//import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';
import {ActivityIndexComponent} from './activity.component';
import {TarifaComponent} from './tarifa.component';
import {GalleryComponent} from './gallery.component';
import {SocioComponent} from './socio.component';
import {FooterComponent} from './footer.component';

import {Installation, InstallationService}   from './installation.service';



@Component({

    selector: 'installation',
    templateUrl: 'app/html/installation.component.html',
    styleUrls: ['app/css/style.component.css'],
    
    /*directives:[HeaderComponent,
                NavbarComponent,
                ActivityIndexComponent,
                TarifaComponent,
                GalleryComponent,
                SocioComponent,
                FooterComponent]*/
})

export class InstallationComponent{}
/*export class InstallationComponent implements OnInit{
  installations: Installation[];

  constructor(private router: Router, private service: InstallationService){}

  ngOnInit(){
    this.service.getInstalaciones().subscribe(
      installations => this.installations = installations,
      error => console.log(error)
    );
  }
}*/
