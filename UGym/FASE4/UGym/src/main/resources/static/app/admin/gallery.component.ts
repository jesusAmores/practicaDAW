import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

import {Image,GalleryService} from '../gallery.service';

@Component({
    selector: 'activities',
    templateUrl: 'app/admin/html/gallery.component.html',
    styleUrls: ['app/css/admin.component.css'],
    
    directives: [ROUTER_DIRECTIVES,
                 HeaderComponent,
                 NavbarComponent]
})

export class GalleryComponent{
    
    galeria : Image[];
    
    image : Image = new Image(undefined,'');
    
    constructor(private router:Router, routerParams:RouteParams, private galleryService:GalleryService){}    

    ngOnInit(){
        
        this.galleryService.getImages().subscribe(
            galeria => this.galeria = galeria,
            error => console.log(error)
        );
        console.log(this.galeria);  
    }
    
    addImage(){
        this.galleryService.addImage(this.image);
        window.alert("La imagen se ha añadido a la galeria de forma correcta");
        this.image = new Image(undefined,'');
        console.log(this.galeria);
    }
}