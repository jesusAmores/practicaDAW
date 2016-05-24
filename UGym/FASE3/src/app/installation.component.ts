import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Installation, InstallationService}   from './installation.service';



@Component({

    selector: 'installation',
    templateUrl: 'app/html/installation.component.html',
    styleUrls: ['app/css/style.component.css']
})

export class InstallationComponent implements OnInit{
  installations: Installation[];

  constructor(private router: Router, private service: InstallationService){}

  ngOnInit(){
    this.service.getInstalaciones().subscribe(
      installations => this.installations = installations,
      error => console.log(error)
    );
  }
}
