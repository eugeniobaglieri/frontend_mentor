import { Component, OnInit, signal } from '@angular/core';
import { ExtensionCard } from './components/extension-card/extension-card';
import { FilterBar } from './components/filter-bar/filter-bar';
import { Header } from './components/header/header';
import { Extension } from './interfaces/extension';
import { Extensions } from './services/extensions';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, FilterBar, ExtensionCard],
})
export class App implements OnInit {
  protected readonly title = signal('browser_extensions');
  private readonly service = new Extensions();
  filters = ['All', 'Active', 'Inactive'];
  currentFilter: String = 'All';
  extensions: Extension[] = [];

  ngOnInit(): void {
    this.extensions = this.service.getAll(this.currentFilter);
    console.log(this.extensions);
  }

  onFilterChange(filter: String): void {
    this.currentFilter = filter;
    this.extensions = this.service.getAll(filter);
    console.log('Filter changed to:', filter);
  }

  toggle(ext: Extension): void {
    this.service.toggle(ext);
    this.extensions = this.service.getAll(this.currentFilter);
  }

  remove(ext: Extension): void {
    this.service.remove(ext);
    this.extensions = this.service.getAll(this.currentFilter);
  }
}
