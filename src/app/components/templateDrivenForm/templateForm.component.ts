import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-templateForm',
  templateUrl: './templateForm.component.html',
  styleUrls: ['./templateForm.component.css']
})
export class ApptemplateForm  implements OnInit {
  model: any = {};


  constructor() {
  }

  ngOnInit() {
  }

  onSubmit (form) {
    let temp ={}
    temp['emailValue'] = form.form.controls.email.value;
    temp['PasswordValue'] = form.form.controls.password.value;

    console.log('template driven form submitted ===>', form)
    console.log('Value from the field are - ===>', temp)

  }
}
