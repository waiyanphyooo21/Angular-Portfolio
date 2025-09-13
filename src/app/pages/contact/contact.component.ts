import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  phoneNumber = '+95 979 663 5699';
  email = 'dm@waiyanphyooo.online';
  sendData(): void {
    console.log('sends data to its place');
  }
}
