import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class Appparent {
  userNameInParent = "vinay"

  notifications111 = [
    { id: 1, message: 'This is the first notification' },
    { id: 2, message: 'This is the second notification' },
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

}
