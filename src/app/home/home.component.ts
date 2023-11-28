import { Component ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , HousingLocationComponent  ],
  template: `
  <section>
  <form>
    <input type="text" placeholder="Filter by city" />
    <button class="primary" type="button">Search</button>
  </form>
</section>
<section class ="results">
  <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation] = "housingLocation">
  </app-housing-location>

</section>
`,
styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocationList : HousingLocation[] = [
    {
      "id" : 0 ,
      "name":"Acme Fresh Start Housing",
      "city" :"chicago",
      "state":"IL",
      "availableUnits": 4,
      "wifi": true ,
      "laundry": true,
    },
    {
      "id" : 0 ,
      "name":"Acme Fresh Start Housing",
      "city" :"chicago",
      "state":"IL",
      "availableUnits": 4,
      "wifi": true ,
      "laundry": true,
    },
    {
      "id" : 0 ,
      "name":"Acme Fresh Start Housing",
      "city" :"chicago",
      "state":"IL",
      "availableUnits": 4,
      "wifi": true ,
      "laundry": true,
    },
    {
      "id" : 0 ,
      "name":"Acme Fresh Start Housing",
      "city" :"chicago",
      "state":"IL",
      "availableUnits": 4,
      "wifi": true ,
      "laundry": true,
    }
  ] ;
}
