import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

/*export class sharedClasses{
  constructor(public nombre:string,
              public personasApuntadas:integer)
}

@Injectable()
export class sharedClasses {
  private colectivas = [new sharedClass('')];

  getSharedClasses(){
    return withObserver(this.colectivas);
  }

  addSharedClasses(shared: Shared){
    this.colectivas.push(shared);
    return withObserver (undefined);
  }

  removeSharedClasses (shared: Shared){
    for(let i=0; i<this.colectivas.length; i++){
      if(shared.nombre === this.colectivas[i].nombre){
        this.colectivas.splice(i,1);
        break;
      }
    }
    return withObserver (undefined);
  }
}*/
