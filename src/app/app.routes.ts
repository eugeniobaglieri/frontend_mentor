import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    //path: 'product-preview-card',
    path: '',
    loadComponent: () =>
      import('./pages/product-preview-card/product-preview-card').then((m) => m.ProductPreviewCard),
  },
];
