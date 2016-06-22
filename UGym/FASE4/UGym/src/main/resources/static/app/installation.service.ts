import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Installation{
    constructor(public id:number,
                public nombre:string,
                public descripcion:string,
                public imagen:string){}
}

@Injectable()
export class InstallationService{

    private installations = [
    	new Installation(1,'Sala de máquinas','Más de 150 m2  de zona de entrenamiento, pensada para que puedas entrenar con libertad y con todo tipo de equipamiento. Máquinas con carga de discos, poleas, barras, un gran número de mancuernas y bancos para que no esperes. Muchos deportistas se deciden por nuestras instalaciones por la cantidad y variedad de equipamiento que hay a disposición.Dispondrás de una zona de entrenamiento cardiovascular con equipamiento de última generación. Más de 70 equipos de cardio: cintas de correr, elípticas, steps, remos, bicicletas de diferentes tipos, incluso para personas que padezcan lesiones de espalda o tren inferior. Además tendrás la posibilidad de ver tu programa favorito de TV mientras entrenas, escuchar tu música conectando tu ipod a las máquinas, etc., conocerás una manera más amena y divertida de entrenar.', 'sala_maquinas.jpg'),
    	new Installation(2,'Piscina','En nuestra piscina de agua salada podrás practicar la natación por libre o bien asistir a uno de los cursos de natación de nuestra amplia oferta. Disponemos de cursos tanto de iniciación como de perfeccionamiento o entrenamiento, para bebes, niños y adultos. También ofrecemos cursos para embarazadas y cursos de matronatación, que favorecen el equilibrio, la coordinación, el desarrollo psicomotor, la creatividad y la fuerza muscular del bebe, además de reforzar el vínculo entre los padres y el bebé.', 'piscina.jpg'),
      new Installation(3,'Sauna','Este medio de relajación ofrece incontables ventajas: desintoxica la piel, purifica el organismo, dilata los bronquios, regula la presión sanguínea, mejora el ritmo cardíaco y circulatorio.','sauna.jpg'),
    ];

    getInstallations(){
        return withObserver(this.installations);
    }
    getInstallation(id:number | string){
      let installation = this.installations.filter(h => h.id === +id)[0];
      return withObserver(new Installation(installation.id, installation.nombre, installation.descripcion,installation.imagen));
    }

    addInstallation(installation:Installation){
      installation.id = this.installations.length+1;
      this.installations.unshift(installation);
      return withObserver(undefined);
    }

    removeInstallation(installation:Installation){
        for(let i=0; i<this.installations.length; i++){
            if(installation.id === this.installations[i].id){
                this.installations.splice(i,1);
                break;
            }
        }
        return withObserver(undefined);
    }

    editInstallation(installation:Installation){

      let oldInstallation = this.installations.filter(t => t.id === installation.id)[0];
      oldInstallation.nombre = installation.nombre;
      oldInstallation.descripcion = installation.descripcion;
      oldInstallation.imagen = installation.imagen;
      return withObserver(installation);
    }
}
