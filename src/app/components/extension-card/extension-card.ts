import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Extension } from '../../interfaces/extension';

@Component({
  selector: 'app-extension-card',
  imports: [],
  templateUrl: './extension-card.html',
  styleUrl: './extension-card.css',
})
export class ExtensionCard {
  @Input() extension!: Extension;
  @Output() remove = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();

  onToggleActive() {
    this.toggle.emit();
  }

  onRemove() {
    this.remove.emit();
  }
}
