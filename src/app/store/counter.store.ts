import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterStore {
  // Define a writable signal 'count' with an initial value of 0
  private count = signal(0);

  // Getter to return the signal itself, not its value
  getCount() {
    return this.count;
  }

  // Method to increment the counter value by 1
  increment() {
    this.count.update((currentValue) => currentValue + 1);
  }

  // Method to decrement the counter value by 1
  decrement() {
    this.count.update((currentValue) => currentValue - 1);
  }
}
