import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formExamples',
  templateUrl: './formExamples.component.html',
  styleUrls: ['./formExamples.component.css']
})
export class AppformExamples implements OnInit {
  registerForm: FormGroup;
  submitted:boolean = false;


  userName: string = "";
  isShow: boolean = true;
  isUserLoggedin: boolean = true;
  responsefromServer = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere derit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur "
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vstiae ut reiciendismus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exet aut",
      "body": "et iusto sed quo di aut ad\nvoluptatem quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
  ]

  constructor(private formBuilder: FormBuilder) {
    console.log("I'm loaded in constructor");
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['',Validators.required],
        email:['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],

      }
    )


  }
  toggleValue() {
    this.isUserLoggedin = this.isUserLoggedin ? false : true;
    this.isShow = this.isShow ? false : true;

  }

  setUppercaseName(event) {
    debugger;
    console.log(event)
  }
  onSubmit() {
    this.submitted = true;
    console.log('Form submitted !!')
  }

}
