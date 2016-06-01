import {Component} from 'angular2/core';

import{Image,GalleryService} from './gallery.service';

@Component({
    
    selector: 'gallery',
    templateUrl: 'app/html/gallery.component.html',
    styleUrls: ['app/css/style.component.css']
})

export class GalleryComponent{
    
    galeria : Image[];
    
    image1 : Image;
    
    constructor(private galleryService: GalleryService){}
    
    ngOnInit(){
        
        this.galleryService.getImages().subscribe(
            galeria => this.galeria = galeria,
            error => console.log(error)       
        );
        this.image1 = this.galeria[0];
        console.log(this.galeria);
    }
    
}