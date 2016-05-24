import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Installation{
    constructor(public nombre:string,
                public descripcion:string,
                public imagen:string){}
}

@Injectable()
export class InstallationService{
  private instalaciones = [
  	new Installation('Sala de máquinas','Más de 150 m2  de zona de entrenamiento, pensada para que puedas entrenar con libertad y con todo tipo de equipamiento. Máquinas con carga de discos, poleas, barras, un gran número de mancuernas y bancos para que no esperes. Muchos deportistas se deciden por nuestras instalaciones por la cantidad y variedad de equipamiento que hay a disposición.Dispondrás de una zona de entrenamiento cardiovascular con equipamiento de última generación. Más de 70 equipos de cardio: cintas de correr, elípticas, steps, remos, bicicletas de diferentes tipos, incluso para personas que padezcan lesiones de espalda o tren inferior. Además tendrás la posibilidad de ver tu programa favorito de TV mientras entrenas, escuchar tu música conectando tu ipod a las máquinas, etc., conocerás una manera más amena y divertida de entrenar.', 'app/img/sala_maquinas.jpg'),
  	new Installation('Piscina','En nuestra piscina de agua salada podrás practicar la natación por libre o bien asistir a uno de los cursos de natación de nuestra amplia oferta. Disponemos de cursos tanto de iniciación como de perfeccionamiento o entrenamiento, para bebes, niños y adultos. También ofrecemos cursos para embarazadas y cursos de matronatación, que favorecen el equilibrio, la coordinación, el desarrollo psicomotor, la creatividad y la fuerza muscular del bebe, además de reforzar el vínculo entre los padres y el bebé.','app/img/piscina.jpg'),
    new Installation('Sauna','Este medio de relajación ofrece incontables ventajas: desintoxica la piel, purifica el organismo, dilata los bronquios, regula la presión sanguínea, mejora el ritmo cardíaco y circulatorio.','app/img/sauna.jpg'),
  ];

    getInstalaciones(){
        return withObserver(this.instalaciones);
    }

    addInstallation(installation:Installation){
        this.instalaciones.push(installation);
        return withObserver(undefined);
    }

    changeName(installation:Installation, newName: string){
      for(let i=0; i<this.instalaciones.length; i++){
          if(installation.nombre === this.instalaciones[i].nombre){
              this.instalaciones[i].nombre= newName;
              break;
          }
      }
      return withObserver(undefined);
    }

    changeDescription(installation:Installation, newDescription: string){
      for(let i=0; i<this.instalaciones.length; i++){
          if(installation.nombre === this.instalaciones[i].nombre){
              this.instalaciones[i].descripcion= newDescription;
              break;
          }
      }
      return withObserver(undefined);
    }

    changeImg(installation:Installation, newImg: string){
        for(let i=0; i<this.instalaciones.length; i++){
            if(installation.nombre === this.instalaciones[i].nombre){
                this.instalaciones[i].imagen= newImg;
                break;
            }
        }
        return withObserver(undefined);
    }

    removeInstallation(installation:Installation){
        for(let i=0; i<this.instalaciones.length; i++){
            if(installation.nombre === this.instalaciones[i].nombre){
                this.instalaciones.splice(i,1);
                break;
            }
        }
        return withObserver(undefined);
    }
}
