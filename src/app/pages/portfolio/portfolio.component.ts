import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-portfolio',
  imports: [ButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  openGoldenPlate(): void {
    window.open('https://goldenplate.org', '_blank');
  }

  openPortfolio(): void {
    window.open('https://portfolio.waiyanphyooo.online/', '_blank');
  }
}
