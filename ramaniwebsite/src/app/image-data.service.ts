import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageDataService {
  constructor() {}

  getImageDetails(id: number) {
    return {
      1: {
        'name': '',
        'description': 'Like a peacock 🦚 your beauty is multiplied when you spread your wings and show the world yourself',
      }
    }[1];
  }
}
