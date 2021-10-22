import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifeCycleHooks2',
  templateUrl: './lifeCycleHooks2.component.html',
  styleUrls: ['./lifeCycleHooks2.component.css']
})
export class ApplifeCycleHooks2 {


  constructor() {
    console.log("I'm loaded in constructor");
  }

  // TBD
  ngOnChanges() {
    console.log("I'm loaded in ngOnChanges");
  }

  
}
