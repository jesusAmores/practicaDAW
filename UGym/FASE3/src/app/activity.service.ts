import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Activity{

    constructor(public id:number,
                public nombre:string,
                public descripcion:string,
                public imagen:string){
    }
}

@Injectable()
export class ActivityService{
    
    private actividades = [
        new Activity(1,'FITNESS','Todo tu entrenamiento será guiado por nuestro equipo de profesionales, con los que podrás compartir y solventar todo tipo de dudas y errores para optimizar tu forma física.',''),
        new Activity(2,'PILATES','Espalda Sana, Técnicas de Relajación y Respiración, Stretching, Talleres de trabajo emocional... UGym te ofrece todo un abanico de eventos para que puedas aprender y disfrutar de una vida sana y equilibrada.','')
        ];
    
    getActividades(){
        return withObserver(this.actividades);
    }
    
    getActivity(id: number | string) {
        let activity = this.actividades.filter(h => h.id === +id)[0];
        return withObserver(new Activity(activity.id, activity.nombre, activity.descripcion,''));
        
    }
    
    addActivity(activity:Activity){
        activity.id = this.actividades.length+1;
        this.actividades.push(activity);
        return withObserver(activity);
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
    
    editActivity(activity:Activity){
        
        if(activity.id){
            let oldActivity = this.actividades.filter(h => h.id === activity.id)[0];
            oldActivity.nombre = activity.nombre;
            oldActivity.descripcion = activity.descripcion;
        } else {
            activity.id = this.actividades.length+1;
            this.actividades.push(activity);
        }
        return withObserver(activity);
    }
}