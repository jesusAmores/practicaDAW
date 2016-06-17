import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';

import {User,UserService} from './user.service';

@Component({
    
    selector: 'nav',
    templateUrl: 'app/html/navbar.component.html',
    styleUrls: ['app/css/style.component.css'],
    
    directives:[ROUTER_DIRECTIVES]
})

export class NavbarComponent implements OnInit{
    
    administradores : User[];
    clientes : User[];
    
    usuario:User = new User('','','','',undefined,'',undefined,'','','',undefined,'','',undefined,'','');
    
    constructor(private router: Router, private userService: UserService){}
    
    ngOnInit(){
        
        this.userService.getAdministradores().subscribe(
            administradores => this.administradores = administradores,
            error => console.log(error)  
        );
        
        this.userService.getClientes().subscribe(
            clientes => this.clientes = clientes,
            error => console.log(error)    
        );
                
        /*console.log(this.administradores);
        console.log(this.clientes);*/
    }
    
    Entrar(){
        
        if(this.userService.isAdmin(this.usuario)){
            this.router.navigate(['Admin']);
        }
        else if(this.userService.isClient(this.usuario)){
            this.router.navigate(['Client']);
        }
        else console.log("Usuario no registrado");
    }
    
    /*isAdmin(){
        let administrador = false;
        if(this.userService.isAdmin(this.usuario)){
                administrador = true;    
        }
        return administrador;
    }*/   
}