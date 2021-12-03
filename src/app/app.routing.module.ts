import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { Appparent } from './components/componentComunication/parent-child/parent/parent.component';
import { AppsharedServiceComponnetContainer } from './components/componentComunication/siblings/shared-service-componnet-container/sharedServiceComponentContainer.component';
import { AppCustomDirective } from './components/customDirective/customDirective.component';
import { AppdirectiveExamples } from './components/directiveExamples/directiveExamples.component';
import { AppdynamicComponent } from './components/dynamic-component/dynamicComponent.component';
import { AppformExamples } from './components/formExamples/formExamples.component';
import { ApphttpCallsDemo } from './components/httpCalls/httpCallsDemo.component';
import { AppCompB } from './components/inheritance/componentB/AppCompB.componnet';
import { ApplifeCycleHooks1 } from './components/lifeCycleHooks/lifeCycleHooks1/lifeCycleHooks1.component';


import { AppmyFirstComponent } from './components/myFirstComponent/myFirstComponent.component';
import { AppmySecondComponent } from './components/mySecondComponent/mySecondComponent.component';
import { AppprodDetail } from './components/routeParam/product detail/prodDetail.component';
import { ApprouteParam } from './components/routeParam/routeParam.component';
import { AppRxjsOperators } from './components/RxjsOperators/RxjsOperators.component';
import { ApptemplateForm } from './components/templateDrivenForm/templateForm.component';
import { LightswitchComponent } from './components/unitTesting/lightswitch.componnet';
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
    { path: 'customDirective', component: AppCustomDirective },
    { path: 'routeParam', component: ApprouteParam },
    { path: 'inheritance', component: AppCompB },
    { path: 'RxjsOperators', component: AppRxjsOperators },
    { path: 'dynamicComponent', component: AppdynamicComponent },
    { path: 'unitTesting', component: LightswitchComponent },

    
    
    { path: 'products/:productId', component: AppprodDetail },

    
    
    

    { path: 'lazy1', loadChildren: () => import('./lazy1/lazy1Componnet1.module').then(m => m.Lazy1Module)}




]; // sets up routes constant where you define your routes


// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }