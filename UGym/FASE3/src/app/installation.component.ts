import {Component, OnInit}   from 'angular2/core';
import {Installation, InstallationService}   from './installation.service';



@Component({

    selector: 'installation',
    templateUrl: 'app/html/installation.component.html',
    styleUrls: ['app/css/style.component.css']
})

export class InstallationComponent{

    installations : Installation[];
    installation1 : Installation;
    installation2 : Installation;
    installation3 : Installation;

    constructor(private installationService: InstallationService){


    }

    ngOnInit(){

        this.installationService.getInstallations().subscribe(
            installations => this.installations = installations,
            error => console.log(error)
        );

        this.installation1 = this.installations[0];
        this.installation2 = this.installations[1];
        this.installation3 = this.installations[2];

        console.log(this.installations);
        console.log(this.installation1);
        console.log(this.installation2);
        console.log(this.installation3);
    }
}
