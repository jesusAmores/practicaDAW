import {Component,Input} from 'angular2/core';
import {SearchProductComponent} from './searchProduct.component';
import {UpdateProductComponent} from './updateProduct.component';
import {Product,CategoryProduct} from '../product.service';

@Component({
    selector: 'shop',
    templateUrl: 'app/admin/html/shop.component.html',
    styleUrls: ['app/css/admin.component.css'],
    directives: [SearchProductComponent,
                 UpdateProductComponent]

})

export class ShopComponent{

  @Input()
  private categoriasCom: CategoryProduct[];

}
