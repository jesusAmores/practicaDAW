import {Component,Input} from 'angular2/core';
import {CategoryProduct} from './product.service';

@Component({
    selector: 'listProducts',
    templateUrl: 'app/html/listProducts.component.html',
    styleUrls: ['app/css/client.component.css']
})

export class ListProductsComponent{

    @Input()
    private categoriasCom: CategoryProduct[];

    firstGroup(categ: CategoryProduct){
        let isFirst = "";
        if(categ.id === 1){
            isFirst = "active";
        }
        return isFirst;
    }
}
