import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppmyFirstComponent } from './components/myFirstComponent/myFirstComponent.component';
import { AppmySecondComponent } from './components/mySecondComponent/mySecondComponent.component';
import { ApplifeCycleHooks1 } from './components/lifeCycleHooks/lifeCycleHooks1/lifeCycleHooks1.component';
import { ApplifeCycleHooks2 } from './components/lifeCycleHooks/lifeCycleHooks2/lifeCycleHooks2.component';
import { ExponentialPowerPipe } from './exponential-power.pipe';
import { AppdirectiveExamples } from './components/directiveExamples/directiveExamples.component';
import { AppformExamples } from './components/formExamples/formExamples.component';
import { Appchild } from './components/componentComunication/parent-child/child/child.component';
import { Appparent } from './components/componentComunication/parent-child/parent/parent.component';


@NgModule({
  declarations: [// where all the componnets/ Pipes are registered 
    AppComponent,
    AppmyFirstComponent,
    AppmySecondComponent,
    ApplifeCycleHooks1,
    ApplifeCycleHooks2,
    ExponentialPowerPipe,
    AppdirectiveExamples,
    AppformExamples,
    Appchild,
    Appparent
  ],
  imports: [ // Registering Lib class
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [], // Register Services
  bootstrap: [AppComponent] // Bootstraping ofcomponnet
})
export class AppModule { }
