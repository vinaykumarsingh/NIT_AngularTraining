import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppmyFirstComponent } from './components/myFirstComponent/myFirstComponent.component';
import { AppmySecondComponent } from './components/mySecondComponent/mySecondComponent.component';

@NgModule({
  declarations: [// where all the componnets are registered 
    AppComponent,
    AppmyFirstComponent,
    AppmySecondComponent
  ],
  imports: [ // Registering Lib class
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [], // Register Services
  bootstrap: [AppComponent] // Bootstraping ofcomponnet
})
export class AppModule { }
