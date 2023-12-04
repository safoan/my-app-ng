import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  template: `
    <section class = "listing"> 
      <img class="listing-photo" [src]="HousingLocation.photo" 
      alt="Extirior photo of {{HousingLocation.name}}"/>
      <h2 class="listing-heading"> {{HousingLocation.name}}</h2>
      <p class="listing-location"> {{HousingLocation.city}} , {{HousingLocation.state}}</p>
      <a [routerLink]="['/details', HousingLocation.id]">learn More </a>
    </section>
  `,
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  @Input () HousingLocation! : HousingLocation;

}
