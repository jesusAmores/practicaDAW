import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';


@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/pagar.component.html',
    styleUrls: ['./css/listadoProductos.css']
})
export class PagarComponent{

    /*books: Book[];

    constructor(private router:Router, private service: BookService) {}

    ngOnInit(){
      this.service.getBooks().subscribe(
        books => this.books = books,
        error => console.log(error)
      );
    }

    newBook() {
      this.router.navigate(['BookNew']);
    }*/
}
