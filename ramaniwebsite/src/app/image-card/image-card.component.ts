import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent {
  @Input() id = 0;

  constructor(private route: Router) { }

  navigateToImage(id: number) {
    this.route.navigate(['/image', id]);
  }
}
