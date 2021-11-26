import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveExamples',
  templateUrl: './directiveExamples.component.html',
  styleUrls: ['./directiveExamples.component.css']
})
export class AppdirectiveExamples implements OnInit {
  userName:string = "";
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

  positions:Array<Object> = [
    {
      id: 101,
      name: 'Test 101'
    },
    {
      id: 102,
      name: 'Test 102'
    },
    {
      id: 103,
      name: 'Test 103'
    },
    {
      id: 104,
      name: 'Test 104'
    }
  ]

  constructor() {
    console.log("I'm loaded in constructor");
  }

  ngOnInit() {
    console.log("I'm loaded in ngOnInit");
  }
  toggleValue() {
    this.isUserLoggedin = this.isUserLoggedin ? false : true;
    this.isShow = this.isShow ? false : true;

  }

  setUppercaseName(event ) {
    debugger;
    console.log(event)
  }

}
