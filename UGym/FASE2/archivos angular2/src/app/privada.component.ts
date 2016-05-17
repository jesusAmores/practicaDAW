import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';


@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/privada.component.html',
    styleUrls: ['./css/paginaPrivada.css']
})
export class PrivadaComponent{

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
