import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/Rx';

export interface Image{
    
    id? : number;
    nombre:string;
}

const URL = 'index/';

@Injectable()
export class GalleryService{
    
    constructor(private http:Http){}
    
    getImages(){
       return this.http.get(URL)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    }
    
    getImage(id:number | string){
        return this.http.get(URL+id)
          .map(response => response.json())
          .catch(error => this.handleError(error));
    }
    
    saveImage(image: Image) {

    let body = JSON.stringify(image);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }
    
    removeTarifa(image : Image) {      
      
    let headers = new Headers({
       'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });  
      
    return this.http.delete(URL + image.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
    }
    
    updateTarifa(image : Image) {

        let body = JSON.stringify(image);
        
        let headers = new Headers({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        });
        
        let options = new RequestOptions({ headers });

        return this.http.put(URL + image.id, body, options)
          .map(response => response.json())
          .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
    
}
