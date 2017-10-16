import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  rating: number = 0;

  stars: boolean[];

  @Input()
  readOnly: boolean = true;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    /*
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
    */
  }

  clickStar(index: number) {
    if (this.readOnly) {
      return;
    }

    this.rating = index + 1;
    /*
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
    */

    this.ratingChange.emit(this.rating);
  }

  // ngOnChanges第一次调用会在ngOnInit之前
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
