import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{HousingLocationid}}
    </p>
  `,
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute) ;
  HousingLocationid = 0;

  constructor(){
    this.HousingLocationid = Number(this.route.snapshot.params['id']);
  }
}
