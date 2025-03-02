import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { ProductCategoryCardComponent } from '../../shared/product-category-card/product-category-card.component';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss'],
  imports: [ProductCardComponent, ProductCategoryCardComponent],
})
export class HomeProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
