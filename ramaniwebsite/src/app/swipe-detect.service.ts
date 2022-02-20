import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwipeDetectService {
  private swipeValue = new Subject<string>();
  swipe(direction: string) {
    this.swipeValue.next(direction);
  }

  subscribe(nextFunction: (value: string) => void) {
    return this.swipeValue.subscribe({
      next: nextFunction,
    });
  }
}
