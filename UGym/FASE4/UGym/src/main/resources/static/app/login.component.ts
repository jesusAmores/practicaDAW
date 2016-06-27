import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {LoginService}   from './login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/html/login.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class LoginComponent {

  constructor(private router:Router, private loginService: LoginService){}
    
  logIn(event: any, user: string, pass: string){
	  
	  event.preventDefault();
	  
	  this.loginService.logIn(user, pass).subscribe(
	      user => console.log(user),
	      error => alert("Invalid user or password")
      );

      if(this.loginService.isAdmin){
        this.router.navigate(['Admin']);
      }

      
  }
  
  logOut(){
	this.loginService.logOut().subscribe(
		response => {}, 
		error => console.log("Error when trying to log out: "+error)
	);
  } 
}
