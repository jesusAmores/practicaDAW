import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';

export class Shared{

    constructor(public id:number,
                public nombre:string,
                public descripcion:string,
                public horario:string,
                public numeroPlazas: number){
    }
}

@Injectable()
export class SharedService{

    private colectivas = [
        new Shared(1,'','','',0),
        new Shared(2,'','','',0)
        ];

    getSharedClasses(){
        return withObserver(this.colectivas);
    }

    getSharedClase(id: number | string) {
        let clase = this.colectivas.filter(h => h.id === +id)[0];
        return withObserver(new Shared(clase.id, clase.nombre, clase.descripcion, clase.horario, clase.numeroPlazas));

    }

    addSharedClass(shared: Shared){
        shared.id = this.colectivas.length+1;
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

    editSharedClass(shared:Shared){
        let oldShared = this.colectivas.filter(c => c.id === shared.id)[0];
        oldShared.nombre = shared.nombre;
        oldShared.descripcion = shared.descripcion;
        oldShared.horario = shared.horario;
        oldShared.numeroPlazas = shared.numeroPlazas;
        return withObserver(shared);
    }
}
