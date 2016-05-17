import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Activity {

  constructor(
    public id: number,
    public title: string,
    public description: string) {}

}

@Injectable()
export class ActivityService {

  private activities = [
  	new Activity(1, 'FITNESS', 'Todo tu entrenamiento será guiado por nuestro equipo de profesionales, con los que podrás compartir y solventar todo tipo de dudas y errores para optimizar tu forma física.'),
  	new Activity(2, 'PILATES','Espalda Sana, Técnicas de Relajación y Respiración, Stretching, Talleres de trabajo emocional... UGym te ofrece todo un abanico de eventos para que puedas aprender y disfrutar de una vida sana y equilibrada.'),
  	new Activity(3, 'SPINING','Forma parte del pelotón ciclista liderado por nuestros mejores profesionales. Recorreras un sin fín de emociones con la mejor música y las más originales clases temáticas.'),
  	new Activity(4, 'ZUMBA','Un entrenamiento completo que combina todos los elementos del acondicionamiento físico: trabajo cardiovascular y muscular, equilibrio y flexibilidad, aumento de energía y muchísimos beneficios increíbles que disfrutarás después de cada clase.'),
  ];

  getActivities() {
    return withObserver(this.activities);
  }

  getActivity(id: number | string) {
    let activity = this.activities.filter(h => h.id === +id)[0]
    return withObserver(new Activity(activity.id, activity.title, activity.description));
  }

  removeActivity(activity: Activity){
    for(let i=0; i<this.activities.length; i++){
        if(this.activities[i].id === activity.id){
          this.activities.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveActivity(activity: Activity){
    if(activity.id){
      let oldActivity = this.activities.filter(h => h.id === activity.id)[0];
      oldActivity.title = activity.title;
      oldActivity.description = activity.description;
    } else {
      activity.id = this.activities.length+1;
      this.activities.push(activity);
    }
    return withObserver(activity);
  }
}
