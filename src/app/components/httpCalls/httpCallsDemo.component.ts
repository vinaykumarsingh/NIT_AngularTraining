import { Component, OnInit } from '@angular/core';
import { HttpDemoService } from './service/httpDemo.service';

@Component({
  selector: 'app-httpCallsDemo',
  templateUrl: './httpCallsDemo.component.html',
  styleUrls: ['./httpCallsDemo.component.css']
})
export class ApphttpCallsDemo  implements OnInit {

  dataSource:any

  constructor(private httpDemoService: HttpDemoService) {
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.httpDemoService.getHttpData().subscribe(data=> {
      this.dataSource = data
      console.log('this.dataSource====>', this.dataSource)
    })
  }

}
