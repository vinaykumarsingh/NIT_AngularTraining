import { Component, OnInit } from '@angular/core';
import { RxjsOperatorService } from './service/rxjsOperator.service';

@Component({
  selector: 'app-RxjsOperators',
  templateUrl: './RxjsOperators.component.html',
  styleUrls: ['./RxjsOperators.component.css']
})
export class AppRxjsOperators implements OnInit  {
  dataFromService: []
  constructor(private rxjsOperatorService: RxjsOperatorService) {
  }
  ngOnInit() {
    debugger;
    this.rxjsOperatorService.getUsers();

    ////Normal Subscription
    // this.rxjsOperatorService.source.subscribe(data=>{
    //   this.dataFromService = data;
    //   console.log('test');
    //   console.log('dataFromService', this.dataFromService);
    // })

    ////Subscription using Subject

    // this.rxjsOperatorService.userNamesInService.subscribe(data=> {
    //   this.dataFromService = data;
    // })

    ////Subscription using Behaviour Subject
    // this.rxjsOperatorService.source2.subscribe(data=> {
    //   this.dataFromService = data;
    // })


    //Merged Operatot 
    // this.rxjsOperatorService.getPosts();

    //Of Operatot 
    // this.rxjsOperatorService.sourceUsingOfOperator.subscribe(data=> {
    //   debugger
    //   console.log('sourceUsingOfOperator===>', data)
    // })

    // //MAP Operatot 
    // this.rxjsOperatorService.sourceUsingOfandMapOperator.subscribe(data=> {
    //   console.log('sourceUsingOfandMapOperator===>', data)
    // })

    // //Filter Operatot 
    // this.rxjsOperatorService.sourceUsingOfandFilterOperator.subscribe(data=> {
    //   console.log('sourceUsingOfandFilterOperator===>', data)
    // })


    // //TAP Operatot 
    this.rxjsOperatorService.sourceUsingOfandTapOperator.subscribe(data=> {
      console.log('sourceUsingOfandTapOperator===>', data)
    })
  }
}
