import { Component, OnInit } from '@angular/core';
import { AppCompA } from '../componentA/AppCompA.componnet';

@Component({
  selector: 'AppCompB',
  templateUrl: './AppCompB.componnet.html',
  styleUrls: ['./AppCompB.component.css']
})
export class AppCompB extends AppCompA implements OnInit  {
  tempVar = this.courceName;


  constructor() {
    super()
  }


  ngOnInit() {
    debugger;
    // console.log('name inherited is ===>', this.courceName)
    console.log('text returned from inherited function',this.canBeInheritedFunction());
  }


}


