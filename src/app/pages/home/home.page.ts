import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { BannerComponent } from '../../components/modules/banner/banner.component';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { HomeProductComponent } from '../../components/modules/home-product/home-product.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    BannerComponent,
    HeaderComponent,
    HomeProductComponent,
    FooterComponent,
  ],
})
export class HomePage {
  constructor() {}
}
