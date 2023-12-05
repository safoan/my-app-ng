import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
    <section class="all-content">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}} , {{housingLocation?.state}}</p>
      </section>

      <section class="listing-features">
        <h2 class="section-heading"> About this Housing Location </h2>
        <ul >
          <li> Units available : {{housingLocation?.availableUnits}} </li>
          <li> Does this location have laundray : {{housingLocation?.laundry}}</li>
          <li> Does this place have Wifi ?: {{housingLocation?.wifi}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading"> Apply now to live here </h2>
        <button class="primary" type="button"> apply Now </button>
      </section>
    </section>
    </article>  
  `,
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute) ;
  housingService = inject(HousingService);
  housingLocation : HousingLocation | undefined;

  constructor(){
    const HousingLocationid = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.
    getHousingLocationById(HousingLocationid);
    
  }
}
