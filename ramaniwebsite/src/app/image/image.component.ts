import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomOrderImageIdsService } from '../random-order-image-ids.service';
import { SwipeDetectService } from '../swipe-detect.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  id = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private randomOrderImageIdsService: RandomOrderImageIdsService,
    private swipeDetectService: SwipeDetectService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.swipeDetectService.subscribe((value) => {
      if (value === 'next') {
        this.goToNextImage();
      }
      if (value === 'previous') {
        this.goToPreviousImage();
      }
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key == 'ArrowUp' || event.key == 'ArrowLeft') {
      this.goToPreviousImage();
    }
    if (event.key == 'ArrowDown' || event.key == 'ArrowRight') {
      this.goToNextImage();
    }
  }

  goToPreviousImage() {
    this.redirectToImage(
      this.randomOrderImageIdsService.getPreviousId(this.id)
    );
  }

  goToNextImage() {
    this.redirectToImage(this.randomOrderImageIdsService.getNextId(this.id));
  }

  redirectToImage(id: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['image', id]));
  }
}
