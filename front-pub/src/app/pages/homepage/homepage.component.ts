import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public showSubscription: boolean = true;

  public imageObject: [any] = [ {
    imageURL: 'assets/images/work.jpg',
    heading: 'We Work Together for a Better Tomorrow',
  }];

  constructor() {
  }

  ngOnInit() {
  }

  subscriptionDone(result: boolean) {
      this.showSubscription = false;
      setTimeout(() => {
        this.showSubscription = true;
      }, 10);
  }
}
