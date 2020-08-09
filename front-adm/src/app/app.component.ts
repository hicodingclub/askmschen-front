import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public orgName: string = 'AskMsChen';
  public yyyy: number;

  constructor() {
    this.yyyy = new Date().getFullYear();
  }
}
