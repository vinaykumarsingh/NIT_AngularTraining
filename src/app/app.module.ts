import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppmyFirstComponent } from './components/myFirstComponent/myFirstComponent.component';
import { AppmySecondComponent } from './components/mySecondComponent/mySecondComponent.component';
import { AppRoutingModule } from './app.routing.module'
import { ApplifeCycleHooks1 } from './components/lifeCycleHooks/lifeCycleHooks1/lifeCycleHooks1.component';
import { ApplifeCycleHooks2 } from './components/lifeCycleHooks/lifeCycleHooks2/lifeCycleHooks2.component';
import { ExponentialPowerPipe } from './exponential-power.pipe';


@NgModule({
  declarations: [// where all the componnets are registered 
    AppComponent,
    AppmyFirstComponent,
    AppmySecondComponent,
    ApplifeCycleHooks1,
    ApplifeCycleHooks2,
    ExponentialPowerPipe
  ],
  imports: [ // Registering Lib class
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [], // Register Services
  bootstrap: [AppComponent] // Bootstraping ofcomponnet
})
export class AppModule { }