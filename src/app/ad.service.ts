import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdItem } from './ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {
        name: 'Bombasto', bio: 'Brave as thy come'
      }),
      new AdItem(HeroProfileComponent, {
        name: 'Dr IQ', bio: 'Smart as they come'
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'Hiring for severel positions',
        body: 'Submit your resume today'
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'Opening in all departments',
        body: 'Apply today'
      }),
    ];
  }
}
