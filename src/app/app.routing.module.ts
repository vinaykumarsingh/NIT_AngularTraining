import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppdirectiveExamples } from './components/directiveExamples/directiveExamples.component';
import { AppformExamples } from './components/formExamples/formExamples.component';
import { ApplifeCycleHooks1 } from './components/lifeCycleHooks/lifeCycleHooks1/lifeCycleHooks1.component';


import { AppmyFirstComponent } from './components/myFirstComponent/myFirstComponent.component';
import { AppmySecondComponent } from './components/mySecondComponent/mySecondComponent.component';

const routes: Routes = [
    { path: '', component: AppmyFirstComponent },
    { path: 'first-component', component: AppmyFirstComponent },
    { path: 'second-component', component: AppmySecondComponent },
    { path: 'lifeCycleHooks', component: ApplifeCycleHooks1 },
    { path: 'appdirectiveExamples', component: AppdirectiveExamples },
    { path: 'AppformExamples', component: AppformExamples },



]; // sets up routes constant where you define your routes


// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }