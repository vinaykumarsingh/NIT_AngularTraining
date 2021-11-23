import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { Appparent } from './components/componentComunication/parent-child/parent/parent.component';
import { AppsharedServiceComponnetContainer } from './components/componentComunication/siblings/shared-service-componnet-container/sharedServiceComponentContainer.component';
import { AppdirectiveExamples } from './components/directiveExamples/directiveExamples.component';
import { AppformExamples } from './components/formExamples/formExamples.component';
import { ApphttpCallsDemo } from './components/httpCalls/httpCallsDemo.component';
import { ApplifeCycleHooks1 } from './components/lifeCycleHooks/lifeCycleHooks1/lifeCycleHooks1.component';


import { AppmyFirstComponent } from './components/myFirstComponent/myFirstComponent.component';
import { AppmySecondComponent } from './components/mySecondComponent/mySecondComponent.component';
import { ApptemplateForm } from './components/templateDrivenForm/templateForm.component';
import { AuthGuard } from './routeGuard/auth-guard.service';

const routes: Routes = [
    { path: '', component: AppmyFirstComponent },
    { path: 'first-component', component: AppmyFirstComponent },
    { path: 'second-component', component: AppmySecondComponent, canActivate: [AuthGuard] },
    { path: 'lifeCycleHooks', component: ApplifeCycleHooks1 },
    { path: 'appdirectiveExamples', component: AppdirectiveExamples },
    { path: 'AppformExamples', component: AppformExamples },
    { path: 'parentChildComunnication', component: Appparent },
    { path: 'siblingsComunnication', component: AppsharedServiceComponnetContainer },
    { path: 'httpCallDemo', component: ApphttpCallsDemo },
    { path: 'templlateDrivenForm', component: ApptemplateForm },

    

    { path: 'lazy1', loadChildren: () => import('./lazy1/lazy1Componnet1.module').then(m => m.Lazy1Module)}




]; // sets up routes constant where you define your routes


// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }