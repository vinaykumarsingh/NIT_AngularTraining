import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-myFirstComponent',
  templateUrl: './myFirstComponent.component.html',
  styleUrls: ['./myFirstComponent.component.css']
})
export class AppmyFirstComponent {
  title = 'my-app'
  userName = 'vinay singh'
  myWealth = 1000;
  baseNumber = 2

  constructor( private formBuilder:FormBuilder ) {

  }

  // profileForm = this.fb.group({

  studentRegistrationForm  = this.formBuilder.group({
    firstName: [''],
    lastName: ['']
  })

  onSubmit() {
    debugger
    console.log("vau ein th efoms are --====>", this.studentRegistrationForm.value )
    
  }
  
}
