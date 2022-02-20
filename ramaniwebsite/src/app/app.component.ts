import { Component } from '@angular/core';
import { SwipeDetectService } from './swipe-detect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ramaniwebsite';
  swipeCoord = [0, 0];
  swipeTime = 0;

  constructor(private swipeDetectService: SwipeDetectService) {}

  swipe(e: TouchEvent, when: string) {
    const coord: [number, number] = [
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY,
    ];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [
        coord[0] - this.swipeCoord[0],
        coord[1] - this.swipeCoord[1],
      ];
      const duration = time - this.swipeTime;

      if (
        duration < 1000 && //
        Math.abs(direction[0]) > 30 && // Long enough
        Math.abs(direction[0]) > Math.abs(direction[1] * 3)
      ) {
        const swipeDirection = direction[0] < 0 ? 'next' : 'previous';
        this.swipeDetectService.swipe(swipeDirection);
      }
    }
  }
}
