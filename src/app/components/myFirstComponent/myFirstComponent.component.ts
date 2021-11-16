import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  isStatusValid1: boolean = true
  isStatusValid2: boolean = false
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


  constructor(private formBuilder: FormBuilder, private router: Router ) {

  }

  // profileForm = this.fb.group({

  studentRegistrationForm = this.formBuilder.group({
    firstName: ['Vinay', Validators.minLength(3)],
    lastName: ['Singh']
  })

  onSubmit() {
    debugger
    console.log("value in th efoms are --====>", this.studentRegistrationForm.value)
    // this.router.navigate('https://www.w3schools.com/')
    window.location.href='https://www.w3schools.com'

  }

}
