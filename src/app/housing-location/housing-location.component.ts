import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule ],
  template: `
    <section class = "listing"> 
      
      <h2 class="listing-heading"> {{HousingLocation.name}}</h2>
      <p class="listing-location"> {{HousingLocation.city}} , {{HousingLocation.state}}</p>
    </section>
  `,
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  @Input () HousingLocation! : HousingLocation;

}
