import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductPreviewCard } from './pages/product-preview-card/product-preview-card';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductPreviewCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend_mentor');
}
