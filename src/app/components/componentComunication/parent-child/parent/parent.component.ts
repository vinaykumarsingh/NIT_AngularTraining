import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class Appparent {
  userNameInParent = "vinay"

  notifications = [
    { id: 1, message: 'This is the first notification' },
    { id: 2, message: 'This is the second notification' },
  ];

  constructor() {
    console.log('inside constructure')
  }

}
