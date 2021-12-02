import { Component, OnInit } from '@angular/core';
import { RxjsOperatorService } from '../service/rxjsOperator.service';

@Component({
  selector: 'app-rxjsConsumer',
  templateUrl: './rxjsConsumer.component.html',
  styleUrls: ['./rxjsConsumer.component.css']
})
export class ApprxjsConsumer implements OnInit  {
  dataFromService: []
  
  constructor(private rxjsOperatorService: RxjsOperatorService) {
  }
  ngOnInit() {
    debugger
    //// Normal Subscription
    // this.rxjsOperatorService.getUsers(); // Multiple API call
    // this.rxjsOperatorService.source.subscribe(data=>{
    //   this.dataFromService = data;
    // })

    //// Subject Subscription

    // this.rxjsOperatorService.userNamesInService.subscribe(data=> {
    //   this.dataFromService = data;
    // })


    //// Behaviour Subject 
    // this.rxjsOperatorService.source2.subscribe(data=> {
    //   this.dataFromService = data;
    // })

    // ////Replay Subject
    // this.rxjsOperatorService.replaySubject.subscribe(data=>{
    //  console.log('Replay SubjectData===>',data)

    // })

    ////Merged
    // this.rxjsOperatorService.sourceMerged.subscribe(data=> {
    //   debugger
    //   console.log('Merged=======>',data)
      
    // })

  }
}
