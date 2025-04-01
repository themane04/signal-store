import {Component} from '@angular/core';
import {CounterStore} from '../../store/counter.store';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  // Getter to access the count signal directly from the store
  get count() {
    return this.counterStore.getCount();
  }

  // Inject the CounterStore to manage the counter state
  constructor(
    private counterStore: CounterStore
  ) {
  }

  // Call the store's increment method to increase the counter
  increment() {
    this.counterStore.increment();
  }

  // Call the store's decrement method to decrease the counter
  decrement() {
    this.counterStore.decrement();
  }
}
