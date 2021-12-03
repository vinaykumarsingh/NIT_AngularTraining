import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';


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
import { AppsharedServiceComponnetContainer } from './components/componentComunication/siblings/shared-service-componnet-container/sharedServiceComponentContainer.component';
import { AppsharedServiceComponent1 } from './components/componentComunication/siblings/shared-service-componnet1/sharedServiceComponent1.component';
import { AppsharedServiceComponent2 } from './components/componentComunication/siblings/shared-service-componnet2/sharedServiceComponent2.component';
import { ApphttpCallsDemo } from './components/httpCalls/httpCallsDemo.component';
import { ApptemplateForm } from './components/templateDrivenForm/templateForm.component';
import { AppCustomDirective } from './components/customDirective/customDirective.component';
import { ChangeTextDirective } from './components/customDirective/directives/change-text.directive';
import { AppShadowDirective } from './components/customDirective/directives/app-shadow.directive';
import { CustomThemeDirective } from './components/customDirective/directives/custom-theme.directive';
import { ApprouteParam } from './components/routeParam/routeParam.component';
import { AppprodDetail } from './components/routeParam/product detail/prodDetail.component';
import { MyHttpInterceptor } from './components/interceptor/http.interceptor';
import { AppCompA } from './components/inheritance/componentA/AppCompA.componnet';
import { AppCompB } from './components/inheritance/componentB/AppCompB.componnet';
import { AppRxjsOperators } from './components/RxjsOperators/RxjsOperators.component';
import { ApprxjsConsumer } from './components/RxjsOperators/rxjsConsumer/rxjsConsumer.component';
import { AppdynamicComponent } from './components/dynamic-component/dynamicComponent.component';
import { AdDirective } from './components/dynamic-component/directive/ad.directive';
import { HeroJobAdComponent } from './components/dynamic-component/component/hero-job-ad.component';
import { HeroProfileComponent } from './components/dynamic-component/component/hero-profile.component';
import { AdBannerComponent } from './components/dynamic-component/component/ad-banner.component';
import { AdService } from './components/dynamic-component/service/ad.service';
import { RainbowDirective } from './components/customDirective/directives/rainbow.directive';
import { LightswitchComponent } from './components/unitTesting/lightswitch.componnet';


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
    Appparent,
    AppsharedServiceComponnetContainer,
    AppsharedServiceComponent1,
    AppsharedServiceComponent2,
    ApphttpCallsDemo,
    ApptemplateForm,
    AppCustomDirective,
    ChangeTextDirective,
    AppShadowDirective,
    CustomThemeDirective,
    RainbowDirective,
    ApprouteParam,
    AppprodDetail,
    AppCompB,
    AppCompA,
    AppRxjsOperators,
    ApprxjsConsumer,
    AppdynamicComponent,
    AdDirective,
    HeroProfileComponent,
    HeroJobAdComponent,
    AdBannerComponent,
    LightswitchComponent
  ],
  imports: [ // Registering Lib class
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
    AdService
  ], // Register Services
  bootstrap: [AppComponent] // Bootstraping ofcomponnet
})
export class AppModule { }
