import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-sharedServiceComponent1',
  templateUrl: './sharedServiceComponent1.component.html',
  styleUrls: ['./sharedServiceComponent1.component.css']
})
export class AppsharedServiceComponent1 {
  userName: string;


  constructor(private sharedDataService : SharedDataService) {
    console.log('inside constructure')
  }

  // ngOnInit() {
  //   this.state.username.subscribe(result => {
  //     this.username = result; // this set's the username to the default observable value
  //   });
  // }

  ngOnInit() {
    this.sharedDataService.username.subscribe(data=> {
      this.userName = data;
    })
  }

}
