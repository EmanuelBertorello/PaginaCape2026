import { Component, ChangeDetectionStrategy, Input, signal } from '@angular/core';
import { FaqItem } from '../../../core/models/interfaces';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq-accordion.html',
})
export class FaqAccordionComponent {
  @Input({ required: true }) faqs: FaqItem[] = [];
  @Input() allowMultiple = false;

  readonly openItems = signal<Set<number>>(new Set());

  toggle(index: number): void {
    this.openItems.update(set => {
      const newSet = new Set(set);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!this.allowMultiple) newSet.clear();
        newSet.add(index);
      }
      return newSet;
    });
  }

  isOpen(index: number): boolean {
    return this.openItems().has(index);
  }
}
