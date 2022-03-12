import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageDataService } from '../image-data.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
})
export class ImageCardComponent implements OnInit {
  @Input() id = 0;
  name = '';
  description = '';

  constructor(private route: Router, private imageData: ImageDataService) {}

  ngOnInit(): void {
    const imageDetails = this.imageData.getImageDetails(this.id);
    if (imageDetails) {
      this.name = imageDetails.name;
      this.description = imageDetails.description;
    }
  }

  navigateToImage(id: number) {
    this.route.navigate(['/image', id]);
  }
}
