import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [ButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  sectionTitle: string = 'About Me';
  introductionText: string = 'Learn more';
  aboutMeParagraph1: string = `Enthusiastic and results-driven full stack developer with a strong foundation in Java, Spring, MySQL, and web technologies. Currently developing a Warehouse Management System using Java and MySQL, with hands-on experience in both backend logic and dynamic front-end interfaces.`;
  aboutMeParagraph2: string = `I hold two Diplomas in Computing from university of greenwich, UK and Certified in ITPEC IP (Information Technology Passport) and FE (Fundamental Information Technology Engineer), and actively preparing for the ITPEC AP (Applied Information Technology Engineer).`;
  aboutMeParagraph3: string = `Skilled in debugging, problem-solving, and building scalable software solutions. Passionate about continuous learning and applying knowledge through real-world projects. Comfortable working independently or in teams, with a focus on clean, maintainable code and timely delivery.`;
  buttonText: string = 'View Projects';

  constructor(public router: Router) {}

  navigate(): void {
    this.router.navigate(['/portfolio']);
  }
}
