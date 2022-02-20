import { Injectable } from '@angular/core';
import arrayShuffle from 'array-shuffle';

@Injectable({
  providedIn: 'root'
})
export class RandomOrderImageIdsService {
  ids: number[] = [];
  noOfImages = 18;

  constructor() {
    this.ids = arrayShuffle(Array.from({length: this.noOfImages}, (_, i) => i + 1));
  }

  get() {
    return this.ids;
  }

  getNextId(id: number) {
    const index = this.ids.indexOf(id);
    if (index === this.ids.length - 1) return this.ids[0];
    return this.ids[index + 1];
  }

  getPreviousId(id: number) {
    const index = this.ids.indexOf(id);
    if (index === 0) return this.ids[this.ids.length - 1];
    return this.ids[index - 1];
  }
}
