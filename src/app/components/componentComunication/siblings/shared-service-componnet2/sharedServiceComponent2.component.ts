import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-sharedServiceComponent2',
  templateUrl: './sharedServiceComponent2.component.html',
  styleUrls: ['./sharedServiceComponent2.component.css']
})
export class AppsharedServiceComponent2{
  username: string;

  constructor(private sharedDataService : SharedDataService) {
    console.log('inside constructure')
  }

  updateUsername () {
    // changeUsername
    this.sharedDataService.changeUsername(this.username)
  }

}
