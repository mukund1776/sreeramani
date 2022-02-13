import { Injectable } from '@angular/core';
import arrayShuffle from 'array-shuffle';

@Injectable({
  providedIn: 'root'
})
export class RandomOrderImageIdsService {
  ids: number[] = [];
  get(noOfImages: number) {
    if (this.ids.length) return this.ids;
    this.ids = arrayShuffle(Array.from({length: noOfImages}, (_, i) => i + 1));
    return this.ids;
  }
}
