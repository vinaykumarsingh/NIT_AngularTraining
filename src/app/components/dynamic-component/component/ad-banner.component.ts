import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdDirective } from '../directive/ad.directive';
// import { AdDirective } from '../directives/ad.directive';
import { AdComponent } from '../interface/ad.component';

@Component({
  selector: 'add-banner',
  template: `
              <div class="ad-banner">
                <h3>Advertisements</h3>
                <ng-template ad-host></ng-template>
              </div>
            `
})


export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads: AdItem[]; // Willcome from Service, AdService returns the actual ads making up the ad campaign. array of components
  // Passing an array of components to AdBannerComponent allows for a dynamic list of ads without static elements in the template.
  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  // AdBannerComponent cycles through the array of 
  // AdItems and loads a new component every 3 seconds by calling loadComponent()
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
// #enddocregion class