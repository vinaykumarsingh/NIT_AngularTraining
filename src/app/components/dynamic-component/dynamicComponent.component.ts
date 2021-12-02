import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './service/ad.service';


@Component({
  selector: 'app-dynamicComponent',
  templateUrl: './dynamicComponent.component.html',
  styleUrls: ['./dynamicComponent.component.css']
})
export class AppdynamicComponent implements OnInit {
  ads: AdItem[];
  constructor(private adService: AdService) {}
  // AdService returns the actual ads making up the ad campaign.

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
