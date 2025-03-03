import { Component } from '@angular/core';
import {
  IonInput,
  IonButton,
  IonItem,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowForwardOutline,
  logoInstagram,
  logoTwitter,
  logoFacebook,
  logoLinkedin,
  logoYoutube,
  logoGithub,
  logoSkype,
} from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonInput,
    IonButton,
    IonItem,
    IonIcon,
    IonLabel,
    IonList,
    IonListHeader,
  ],
})
export class FooterComponent {
  constructor() {
    addIcons({
      arrowForwardOutline,
      logoTwitter,
      logoFacebook,
      logoLinkedin,
      logoYoutube,
      logoGithub,
      logoSkype,
      logoInstagram,
    });
  }
}
