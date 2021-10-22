import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifeCycleHooks1',
  templateUrl: './lifeCycleHooks1.component.html',
  styleUrls: ['./lifeCycleHooks1.component.css']
})
export class ApplifeCycleHooks1 implements OnInit {


  constructor() {
    console.log("I'm loaded in constructor");
  }

  ngOnChanges() {
    console.log("I'm loaded in ngOnChanges");
  }

  ngOnInit() {
    console.log("I'm loaded in ngOnInit");
  }
  ngAfterViewInit() {
    console.log("I'm loaded in ngAfterViewInit");
  }
  ngOnDestroy() {
    console.log("I'm loaded in ngOnDestroy");
  }

  
}
