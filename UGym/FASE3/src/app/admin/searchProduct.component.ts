import {Component,Input} from 'angular2/core';
import {CategoryProduct,Product,ProductService} from '../product.service';

@Component({
    selector: 'searchProduct',
    templateUrl: 'app/html/searchProduct.component.html',
    styleUrls: ['app/css/admin.component.css']
})

export class SearchProductComponent{
  @Input()
  private categArray:CategoryProduct[];

  
}
