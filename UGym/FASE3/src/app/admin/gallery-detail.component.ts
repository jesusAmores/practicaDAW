import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

import {Image,GalleryService} from '../gallery.service';

@Component({
    
    templateUrl: 'app/admin/html/gallery-detail.component.html',
    styleUrls: ['app/css/admin.component.css'],
    
    directives: [ROUTER_DIRECTIVES,
                 HeaderComponent,
                 NavbarComponent]
})

export class GalleryDetailComponent{
    
    image : Image;  
      
    constructor(private router: Router, routeParams: RouteParams, private galleryService: GalleryService){
        
        let id = routeParams.get('id');
        if(id){
            this.galleryService.getImage(id).subscribe(
                image => this.image = image,
                error => console.log(error)            
            );
        }
        else {
            this.image = new Image(undefined, '');                        
        }
    }
    
    cancel(){
        window.history.back();
    }
    
    edit(){
        this.galleryService.editImage(this.image);
        window.alert("El nombre de la imagen se ha editado de forma correcta");
        window.history.back();
    }
    
    remove(){
        let respuestaOk = window.confirm("¿Estas seguro que desea eliminar la imagen?");
        if(respuestaOk){
            this.galleryService.removeImage(this.image);
            window.history.back();
        }
    }    
}