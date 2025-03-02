import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.scss'],
  imports: [
    CommonModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton,
  ],
})
export class ProductCategoryCardComponent {
  @Input() data!: {
    title: string;
    description: string;
    image: string;
    imgPriority: boolean;
    imgSize: number;
    btnTitle: string;
  };
  constructor() {}
}
