import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Appchild implements OnInit {
  @Input() userNameInChild: any
  @Input() notifications: any[]

  constructor() {
    console.log('inside constructure')

  }

  ngOnInit() {
    console.log('inside ngOnInit')
    console.log('inside ngOnInit', this.notifications)
    
  }

}
