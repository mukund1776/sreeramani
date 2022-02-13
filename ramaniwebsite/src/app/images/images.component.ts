import { Component, OnInit } from '@angular/core';
import { RandomOrderImageIdsService } from '../random-order-image-ids.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  noOfImages = 18;
  imageIdList: number[] = [];

  constructor(private randomOrderImageIdsService: RandomOrderImageIdsService) { }

  ngOnInit(): void {
    this.imageIdList = this.randomOrderImageIdsService.get(this.noOfImages);
  }
}
