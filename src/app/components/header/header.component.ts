import { Component } from '@angular/core';
import {
  IonMenu,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonList,
  IonItem,
  IonButton,
  IonPopover,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  searchOutline,
  moonOutline,
  personCircleOutline,
  logoInstagram,
  logoTwitter,
  logoFacebook,
  logoLinkedin,
  logoYoutube,
  logoX,
  logoGithub,
  logoSkype,
  logoPinterest,
  mailOutline,
  personAddOutline,
  bagHandleOutline,
  ellipsisVertical,
  chevronDownOutline,
  chevronUpOutline,
  menuOutline,
} from 'ionicons/icons';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonMenu,
    IonContent,
    IonHeader,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonList,
    IonItem,
    IonButton,
    IonPopover,
  ],
})
export class HeaderComponent {
  isPopoverOpen = false;

  togglePopover() {
    this.isPopoverOpen = !this.isPopoverOpen;
  }
  constructor(private menuCtrl: MenuController) {
    this.isPopoverOpen = false;
    addIcons({
      menuOutline,
      searchOutline,
      moonOutline,
      personCircleOutline,
      logoX,
      logoInstagram,
      logoTwitter,
      logoFacebook,
      logoLinkedin,
      logoYoutube,
      logoPinterest,
      logoGithub,
      logoSkype,
      mailOutline,
      personAddOutline,
      bagHandleOutline,
      ellipsisVertical,
      chevronDownOutline,
      chevronUpOutline,
    });
  }

  openMenu() {
    this.menuCtrl.open('main-menu');
  }

  closeMenu() {
    this.menuCtrl.close('main-menu');
  }
}
