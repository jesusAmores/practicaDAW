import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Tarifa{
    
    constructor(public id:number,
                public tipo:string,
                public precio:number, 
                public descripcion:string){}
}

@Injectable()
export class TarifaService{
    
    private tarifas = [
        new Tarifa(1,'MENSUAL',20,'Prueba un mes sin compromiso. Este es el empunjoncito que necesitas para volver al camino de la vida sana y abandonar el sedentarismo. En UGym encontrarás todo lo necesario para sentirte bien y superarte.'),
        new Tarifa(2,'TRIMESTRAL',50,'Si ya has dado el primer paso y buscas un sitio donde entrenar duro apuesta por este centro deportivo. Cuenta con un equipamiento moderno, buenos profesionales y un montón de clases virtuales para que tonifiques tu cuerpo.'),
        new Tarifa(3,'ANUAL',180,'¡Paga una vez y olvídate de las cuotas! Si estás llevando a cabo una rutina estricta, lo mejor será que busques un gimnasio a la altura de tus necesidades. En UGym no sólo encontrarás un lugar en el que entrenar sin pausas ni prisas, sino que te rodearás de buenos                             profesionales que te ayudarán a alcanzar tus objetivos más inmediatos.')
    ];
    
    getTarifas(){
        return withObserver(this.tarifas);
    }
    
    getTarifa(id: number | string) {
        let tarifa = this.tarifas.filter(h => h.id === +id)[0];
        return withObserver(new Tarifa(tarifa.id, tarifa.tipo, tarifa.precio,tarifa.descripcion));
    }
    
    addTarifa(tarifa:Tarifa){
        tarifa.id = this.tarifas.length+1;
        this.tarifas.unshift(tarifa);
        return withObserver(undefined);
    }
    
    removeTarifa(tarifa:Tarifa){
        for(let i=0; i<this.tarifas.length; i++){
            if(tarifa.id === this.tarifas[i].id){
                this.tarifas.splice(i,1);
                break;
            }
        }
        return withObserver(undefined);
    }
    
    editTarifa(tarifa:Tarifa){
        let oldTarifa = this.tarifas.filter(t => t.id === tarifa.id)[0];
        oldTarifa.tipo = tarifa.tipo;
        oldTarifa.precio = tarifa.precio;
        oldTarifa.descripcion = tarifa.descripcion;
        return withObserver(tarifa);
    }    
}