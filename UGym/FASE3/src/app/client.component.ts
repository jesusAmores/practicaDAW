import {Component,OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {User,UserService} from './user.service';
import {CategoryProduct,Product,ProductService} from './product.service';
import {ListProductsComponent} from './listProducts.component';

@Component({
    templateUrl:'app/html/client.component.html',
    styleUrls: ['app/css/client.component.css'],
    directives: [ListProductsComponent],
    providers: [ProductService]
})

export class ClientComponent {

    private categorias: CategoryProduct[];

    constructor(private router:Router, private routeParams:RouteParams, private productService:ProductService){}

    ngOnInit(){
        this.productService.getCategories().subscribe(
            categories => this.categorias = categories,
            error => console.log(error)
        );
        //console.log(this.categorias);
    }

    /*getTipoProducto(){
      let tProductos: Product[];
      for(let i=0; i<this.productos.length; i++){
        if(this.productos[i].tProducto === true){
          tProductos.push(this.productos[i]);
        }
      }
      return tProductos;
    }

    getTipoEntrenamiento(){
      let tEntrenamientos: Product[];
      for(let i=0; i<this.productos.length; i++){
        if(this.productos[i].tEntrenamiento === true){
          tEntrenamientos.push(this.productos[i]);
        }
      }
      return tEntrenamientos;
    }

    getTipoDieta(){
      let tDietas: Product[];
      for(let i=0; i<this.productos.length; i++){
        if(this.productos[i].tDieta === true){
          tDietas.push(this.productos[i]);
        }
      }
      return tDietas;
    }*/
}
