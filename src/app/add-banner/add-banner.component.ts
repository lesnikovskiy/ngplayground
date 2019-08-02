import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AddDirectiveDirective } from '../add-directive.directive';
import { AdItem } from '../ad-item';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-add-banner',
  template: `
  <div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template appAddHost></ng-template>
  </div>
  `,
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[];
  currentAdIndex = -1;

  @ViewChild(AddDirectiveDirective) adHost: AddDirectiveDirective;
  interval: any;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as AdComponent).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => this.loadComponent(), 3000);
  }

}
