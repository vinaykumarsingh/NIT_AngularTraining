import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AppCompA',
  templateUrl: './AppCompA.componnet.html',
  styleUrls: ['./AppCompA.component.css']
})
export class AppCompA implements OnInit {

  courceName = 'Angular'
  public courceDuration = '25 hrs';
  // private tutorName = 'Vinay Singh';

  constructor() {
  }

  ngOnInit() {
  }

  canBeInheritedFunction() {
    return "I'm returned from inherited function"
  }

}


