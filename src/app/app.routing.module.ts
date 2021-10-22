import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApplifeCycleHooks1 } from './components/lifeCycleHooks/lifeCycleHooks1/lifeCycleHooks1.component';


import { AppmyFirstComponent } from './components/myFirstComponent/myFirstComponent.component';
import { AppmySecondComponent } from './components/mySecondComponent/mySecondComponent.component';

const routes: Routes = [
    { path: 'first-component', component: AppmyFirstComponent },
    { path: 'second-component', component: AppmySecondComponent },
    { path: 'lifeCycleHooks', component: ApplifeCycleHooks1 },

]; // sets up routes constant where you define your routes


// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }