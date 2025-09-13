import { Component } from '@angular/core';
import { IntroductionComponent } from '../introduction/introduction.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main',
  imports: [
    IntroductionComponent,
    AboutMeComponent,
    PortfolioComponent,
    ServicesComponent,
    ContactComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
