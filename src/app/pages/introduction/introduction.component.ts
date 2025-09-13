import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  imports: [ButtonComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {
  greetingText: string = 'Hello! My name is';
  fullName: string = 'Wai Yan Phyo Oo';
  roleText: string = 'i build modern web applications';
  introductionText: string =
    'Enthusiastic and results-driven full stack developer with a strong foundation in Java, Spring, MySQL, and web technologies. Currently developing a Warehouse Management System using Java and MySQL, with hands-on experience in both backend logic and dynamic front-end interfaces.';

  aboutMeButtonText: string = 'About Me';

  constructor(public router: Router) {}

  navigate(): void {
    this.router.navigate(['/about-me']);
  }
}
