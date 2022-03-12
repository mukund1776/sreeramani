import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageDataService {
  constructor() {}

  getImageDetails(id: number) {
    return {
      1: {
        'name': 'Great Image',
        'description': 'Amazing description',
      }
    }[1];
  }
}
