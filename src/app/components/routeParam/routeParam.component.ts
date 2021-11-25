import { Component } from '@angular/core';

@Component({
  selector: 'app-routeParam',
  templateUrl: './routeParam.component.html',
  styleUrls: ['./routeParam.component.css']
})
export class ApprouteParam {
  products = [
    { id : 1, name: 'Prod1 Name'},
    { id : 2, name: 'Prod2 Name'},
    { id : 3, name: 'Prod3 Name'},
    { id : 4, name: 'Prod4 Name'},
  ]
}
