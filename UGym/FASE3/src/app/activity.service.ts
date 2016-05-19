import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Activity{
    constructor(public nombre:string,
                public descripcion:string,
                public imagen:string){}
}

@Injectable()
export class ActivityService{
    
    private actividades = [new Activity('Fitness','A','B')];
    
    getActividades(){
        return withObserver(this.actividades);
    }
    
    addActivity(activity:Activity){
        this.actividades.push(activity);
        return withObserver(undefined);
    }
    
    removeActivity(activity:Activity){
        for(let i=0; i<this.actividades.length; i++){
            if(activity.nombre === this.actividades[i].nombre){
                this.actividades.splice(i,1);
                break;
            }
        }
        return withObserver(undefined);
    }
}