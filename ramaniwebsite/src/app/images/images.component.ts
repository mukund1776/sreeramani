import { Component, OnInit } from '@angular/core';
import arrayShuffle from 'array-shuffle';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  noOfImages = 18;
  imageIdList: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.imageIdList = arrayShuffle(Array.from({length: this.noOfImages}, (_, i) => i + 1));
  }
}
