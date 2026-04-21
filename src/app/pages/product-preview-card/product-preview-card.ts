import { Component } from '@angular/core';
import { Card } from "./components/card/card";

@Component({
  selector: 'app-product-preview-card',
  imports: [ Card],
  templateUrl: './product-preview-card.html',
  styleUrl: './product-preview-card.css',
})
export class ProductPreviewCard {}
