import {Component,Input} from 'angular2/core';

import {HeaderComponent} from './header.component';
import {NavbarComponent} from './navbar.component';

import {SearchProductComponent} from './searchProduct.component';
import {UpdateProductComponent} from './updateProduct.component';
import {Product,CategoryProduct} from '../product.service';

@Component({
    selector: 'shop',
    templateUrl: 'app/admin/html/shop.component.html',
    styleUrls: ['app/css/admin.component.css'],
    directives: [HeaderComponent,
                 NavbarComponent,
                 SearchProductComponent,
                 UpdateProductComponent]

})

export class ShopComponent{

  @Input()
  private categoriasCom: CategoryProduct[];

}
