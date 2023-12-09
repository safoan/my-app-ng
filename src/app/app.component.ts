import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes ,Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.modules';


const routes :Routes =[
  { path : 'home' , component:HomeComponent},
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , HomeComponent , AppRoutingModule ,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-APP';
  
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['']);
  }
}

