import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Appchild } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class Appparent {
  userNameInParent:string = "vinay"


  @ViewChild('txtname') mytxt: ElementRef
  @ViewChild(Appchild) childComponentFunctionRef : Appchild


  ngAfterViewInit() {
    // invokle functionCalledFromParent
    console.log('message in parent componnet is ------>', this.childComponentFunctionRef.functionCalledFromParent())

  }







  notifications111 = [
    { id: 1, message: 'This is the first notification' },
    { id: 2, message: 'This is the second notification' },
    { id: 3, message: 'This is the Third notification' },

  ];

  constructor() {
    console.log('inside constructure')
  }
  
  addItem(value) {
    console.log('value coming from child is ->', value)
    let tempObj = {
      id: this.notifications111.length + 1,
      message: value
    }
    this.notifications111.push(tempObj)
  }

  changeValueInParent(){
    console.log('changeValueInParent is clicked');
    this.userNameInParent = "vinay singh"
  }

  MyFunc() {
    console.log("I'mclickedin template file", this.mytxt.nativeElement.value)
  }

}
