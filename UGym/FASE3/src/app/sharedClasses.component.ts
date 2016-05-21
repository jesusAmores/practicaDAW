import {Component, OnInit} from 'angular2/core';
import {shared, SharedService} from './sharedClasses.service';

@Component({
  selector:'shared',
  templateUrl:'app/html/shared.component.html',
  styleUrls: ['app/css/admin.component.css']
})

export class sharedClassesComponent{
  colectivas: Shared[];
  constructor(private sharedService: SharedService){}
  ngOnInit(){
    this.sharedService.getSharedClasses().subscribe(
      colectivas => this.colectivas = colectivas,
      error => console.log(error)
    );
    console.log(this.colectivas);
  }
}
