import {Component,OnInit} from 'angular2/core';
import {RouteParams, Router,ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';
import {ActivityComponent} from './activity.component';
import {ShopComponent} from './shop.component';
import {Product,CategoryProduct,ProductService} from '../product.service';


//import {User,UserService} from 'user.service';

@Component({

    templateUrl:'app/admin/html/admin.component.html',
    styleUrls: ['app/css/admin.component.css'],
    providers: [ProductService],
    directives: [HeaderComponent,
                 NavbarComponent,
                 ActivityComponent,
                 ShopComponent]

})

export class AdminComponent {

    private categorias: CategoryProduct[];

    constructor(private router:Router, routeParams:RouteParams, private productService:ProductService){}

    ngOnInit(){
      this.productService.getCategories().subscribe(
        categories => this.categorias = categories,
        error => console.log(error)
      );
    }
}
