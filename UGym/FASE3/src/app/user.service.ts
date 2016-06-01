import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

/*export class Admin {
    constructor(public dni:string, public pwd:string){}
}

export class Client {
    constructor(public name:string, public dni:string, public pwd:string){}
}*/

export class User {
    constructor(public dni:string, public pwd:string){}
}

@Injectable()
export class UserService{
    
    private administradores = [new User('admin','1234')];
    private clientes = [new User('2801', '1994')];
    
    getAdministradores(){
        return withObserver(this.administradores);
    }
    
    getClientes(){
        return withObserver(this.clientes);
    }

    isAdmin(user:User){
        let administrador = false;
        for(let i=0; i<this.administradores.length; i++){
            if((user.dni === this.administradores[i].dni) && (user.pwd === this.administradores[i].pwd)){
                administrador = true;
                break;    
            }
        }
        return administrador;
    }
    
    isClient(user:User){
        let cliente = false;
        for(let i=0; i<this.clientes.length; i++){
            if((user.dni === this.clientes[i].dni) && (user.pwd === this.clientes[i].pwd)){
                cliente = true;
                break;    
            }
        }
        return cliente;
    }
    
    iniciarSesion(user:User){
    
        if(this.isAdmin(user)){
            console.log('Soy admin');        
        }
        else if(this.isClient(user)){
            console.log('Soy cliente');
        }
        else console.log('Usuario NO registrado');      
    }  
}