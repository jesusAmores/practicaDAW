import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Shared{

    constructor(public id:number,
                public nombre:string,
                public descripcion:string,
                public horario:string
                public numeroPlazas: number){
    }
}

@Injectable()
export class SharedService{

    private colectivas = [
        new Activity(1,'FITNESS','Todo tu entrenamiento será guiado por nuestro equipo de profesionales, con los que podrás compartir y solventar todo tipo de dudas y errores para optimizar tu forma física.',''),
        new Activity(2,'PILATES','Espalda Sana, Técnicas de Relajación y Respiración, Stretching, Talleres de trabajo emocional... UGym te ofrece todo un abanico de eventos para que puedas aprender y disfrutar de una vida sana y equilibrada.','')
        ];

    getActividades(){
        return withObserver(this.colectivas);
    }

    addActivity(shared: Shared){
        shared.id = this.shared.length+1;
        this.colectivas.push(shared);
        return withObserver(shared);
    }

    removeActivity(shared:Shared){
        for(let i=0; i<this.colectivas.length; i++){
            if(shared.nombre === this.colectivas[i].nombre){
                this.colectivas.splice(i,1);
                break;
            }
        }
        return withObserver(undefined);
    }
}
