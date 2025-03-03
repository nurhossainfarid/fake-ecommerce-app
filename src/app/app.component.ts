import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonContent,
  IonHeader,
  IonFooter,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    HeaderComponent,
    IonContent,
    IonHeader,
    IonFooter,
    FooterComponent,
    IonToolbar,
  ],
})
export class AppComponent {
  constructor() {}
}
