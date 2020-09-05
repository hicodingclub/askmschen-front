import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HostListener } from "@angular/core";
import { urlArray } from "./routes-with-clear-top";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public orgName: string = 'Ask Ms. Chen';
  public yyyy: number;
  public showTopBackground: boolean = false;
  public backgroundPercent: number = 0;
  public fullTop: boolean = true;

  public currentUrl: string = '';

  constructor(private router: Router) {
    this.yyyy = new Date().getFullYear();

    // Google analytics
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects) {
          this.currentUrl = event.urlAfterRedirects;
        } else {
          this.currentUrl = event.url;
        }

        if ((<any>window).gtag) {
          (<any>window).gtag('config', 'UA-145853353-1', {'page_path': this.currentUrl});
        }
      }
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (number < 300) {
       this.showTopBackground = false;
    } else {
      this.showTopBackground = true;
      this.backgroundPercent = Math.min((number-300)/300, 1);
    }

  }

  setMyStyles() {
    if(urlArray.includes(this.router.url)){
      this.fullTop = false;
      let styles = {};
      if(this.showTopBackground){
        styles = {
          'background-color' : 'rgba(23, 162, 184, ' + this.backgroundPercent + ')'
        };
      }
      return styles;
    } else {
      this.fullTop = true;
      let styles = {};
      styles = {
        'background-color' : 'rgb(23, 162, 184)'
      };
      return styles;
    }
  }

}
