import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Image{
    
    constructor(public id:number, public nombre:string){}
}

@Injectable()
export class GalleryService{
    
    private images = [
        new Image(1,'carousel-1.jpg'),
        new Image(2,'carousel-2.jpg'),
        new Image(3,'carousel-3.jpg'),
        new Image(4,'carousel-4.jpg')
    ];
    
    getImages(){
        return withObserver(this.images);
    }
    
    getImage(id:number | string){
        let image = this.images.filter(i => i.id === +id)[0];
        return withObserver(new Image(image.id,image.nombre));
    }
    
    addImage(image:Image){
        image.id = this.images.length+1;
        this.images.unshift(image);
        return withObserver(undefined);
    }
    
    removeImage(image:Image){
        for(let i=0; i<this.images.length; i++){
            if(image.nombre === this.images[i].nombre){
                this.images.splice(i,1);
                break;
            }
        }
        return withObserver(undefined);
    }
    
    editImage(image:Image){
        let oldImage = this.images.filter(i => i.id === image.id)[0];
        oldImage.nombre = image.nombre;
        return withObserver(image);
    }
    
}
