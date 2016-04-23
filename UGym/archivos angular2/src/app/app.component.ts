import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {IndexComponent} from './index.component';
import {ClientesComponent} from './clientes.component';
import {PrivadaComponent} from './privada.component';
import {FranquiciaComponent} from './franquicia.component';
import {TrabajarComponent} from './trabajar.component';
import {PagarComponent} from './pagar.component';
import {RecuperarComponent} from './recuperar.component';
import {SesionComponent} from './sesion.component';


@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `,
  //providers:  [BookService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/index', name: 'Index', component: IndexComponent, useAsDefault: true},
  {path: '/index/recuperacionDatos', name: 'RecuperarDatos', component: RecuperarComponent},
  {path: '/index/iniciarSesion', name: 'IniciarSesion', component: SesionComponent},
  {path: '/index/trabaja', name: 'Trabaja', component: TrabajarComponent},
  {path: '/index/franquicia', name: 'Franquicia', component: FranquiciaComponent},
  {path: '/index/areaClientes', name: 'AreaClientes', component: ClientesComponent},
  {path: '/index/areaClientes/pagar', name: 'AreaPago', component: PagarComponent},
  {path: '/index/admin', name: 'Administrador', component: PrivadaComponent}
])
export class AppComponent { }
