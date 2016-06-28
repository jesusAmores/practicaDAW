import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/Rx';

export interface Tarifa{
    
    id? : number;
    tipo: string;
    precio:number;
    descripcion:string;
}

const URL = 'index/';

@Injectable()
export class TarifaService{
    
    constructor(private http:Http){

    }
    
    getTarifas(){
        return this.http.get(URL)
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }
    
    getTarifa(id: number | string) {
        return this.http.get(URL+id)
          .map(response => response.json())
          .catch(error => this.handleError(error));
    }
    
    saveTarifa(tarifa: Tarifa) {

    let body = JSON.stringify(tarifa);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }
    
    removeTarifa(tarifa : Tarifa) {      
      
    let headers = new Headers({
       'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });  
      
    return this.http.delete(URL + tarifa.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
    }
    
    updateTarifa(tarifa : Tarifa) {

        let body = JSON.stringify(tarifa);
        
        let headers = new Headers({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        });
        
        let options = new RequestOptions({ headers });

        return this.http.put(URL + tarifa.id, body, options)
          .map(response => response.json())
          .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }    
}