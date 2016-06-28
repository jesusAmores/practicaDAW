import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import{Image,GalleryService} from './gallery.service';
import {LoginService}   from './login.service';

@Component({
    
    selector: 'gallery',
    templateUrl: 'app/html/gallery.component.html',
    styleUrls: ['app/css/style.component.css'],
    directives: [ROUTER_DIRECTIVES],
})

export class GalleryComponent{

	galeria : Image[];

	constructor(private router:Router, private galleryService: GalleryService, private loginService:LoginService) {}

	ngOnInit(){
    
      this.galleryService.getImages().subscribe(
        galeria => this.galeria = galeria,
        error => console.log(error)
      );

      console.log(this.galeria);
    }  
}