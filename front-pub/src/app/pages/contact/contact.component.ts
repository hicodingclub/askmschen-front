import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public showSubscription: boolean = true;

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
