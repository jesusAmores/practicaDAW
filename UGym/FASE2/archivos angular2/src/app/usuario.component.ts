import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {UsuarioService} from './usuario.service';
import {Usuario} from './usuario.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/trabajar.component.html',
    styleUrls: ['./css/style-socio.css'],
    providers:  [UsuarioService]
})
export class UsuarioComponent{

    usuario: Usuario;

    constructor(private router:Router, private service: UsuarioService) {}



}
