import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {SesionComponent} from './sesion.component';

@Component({
    directives: [ROUTER_DIRECTIVES,SesionComponent],
    templateUrl: './app/index.component.html',
    styleUrls: ['./css/style.css']
})
export class IndexComponent {

    //books: Book[];

    //constructor(private router:Router) {}

    /*ngOnInit(){
      this.service.getBooks().subscribe(
        books => this.books = books,
        error => console.log(error)
      );
    }*/


}
