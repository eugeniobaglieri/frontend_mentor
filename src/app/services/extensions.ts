import { Injectable } from '@angular/core';
import { Extension } from '../interfaces/extension';
import * as rawData from './data.json';

@Injectable({
  providedIn: 'root',
})
export class Extensions {
  private data: Extension[] = (rawData as any).default;

  getAll(filter: String): Extension[] {
    if (filter === 'Active') return [...this.data.filter((el) => el.isActive)];
    if (filter === 'Inactive') return [...this.data.filter((el) => !el.isActive)];
    return [...this.data];
  }

  toggle(ext: Extension): void {
    this.data.forEach((el) => {
      if (el.name !== ext.name) return;
      el.isActive = !el.isActive;
    });
  }

  remove(ext: Extension): void {
    this.data = this.data.filter((el) => el.name !== ext.name);
  }
}
