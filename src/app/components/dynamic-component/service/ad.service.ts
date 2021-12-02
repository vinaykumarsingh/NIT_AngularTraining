import { Injectable } from '@angular/core';
import { AdItem } from '../ad-item';
import { HeroJobAdComponent } from '../component/hero-job-ad.component';
import { HeroProfileComponent } from '../component/hero-profile.component';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, { name: 'Bombasto', bio: 'Brave as they come' }),

      new AdItem(HeroProfileComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),

      new AdItem(HeroJobAdComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!'
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'Openings in all departments',
        body: 'Apply today'
      }),
    ];
  }
}
