import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitchComp',
  templateUrl: './lightswitch.componnet.html',
  styleUrls: ['./lightswitch.componnet.css']
})
export class LightswitchComponent {
    isOn = false;
    message='The light is Off'
    btnClicked() { 
      this.isOn = !this.isOn; 
      this.message = this.isOn? "The light is ONN" : "The light is Off"
    }
}
