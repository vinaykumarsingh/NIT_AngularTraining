import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'my-app'

  userFirstName:string ;
  userLastName = 'Singh'
  age:Number;
  isUIDeveloper:boolean = true

  // any Data Type

  notSureOfValue: any



  constructor() {
    console.log('Im in constructor')
    this.userFirstName = 'Vinay'
  }
  ngOnInit() {
    console.log('Im in ngOnInit')

    // this.age = "NIT Demo"
    this.notSureOfValue = true

    // this.



    for (let i = 0; i < 3; i++) {
      console.log('Value of I is ===>', i)
    }


    // console.log('Value of I out of For loop ===>', i)

    let tempString1 = 'NIT1';
    const tempString2 = 'NIT2';

    tempString1 = "Changed NAme";
    // tempString2= "Test Change Name";




    const tempArray = [1,2,3];

    tempArray.push(4)

    console.log('tempArray=====>', tempArray)




    // this.testFunction();
    // console.log('Value of TtempVar out of function is ==>', tempVar)
  }


  // testFunction () {
  //   var tempVar= 10
  //   console.log('Value of tempVar ===>', tempVar)

  // }

  testFunc () {

  }



}


