import {
  Component,
  OnInit,
  AfterViewInit,
  Input
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
import {
  NewsService
} from '../news.service';
import {
  NewsDetailComponent
} from './news-detail.component';
@Component({
  selector: 'app-news-detail-widget-post',
  templateUrl: './news-detail-widget-post.component.html',
  styleUrls: ['./news-detail.component.css', './news-detail-widget-post.component.css']
})
export class NewsDetailWidgetPostComponent extends NewsDetailComponent implements OnInit, AfterViewInit {
  constructor(public newsService: NewsService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(newsService, injector, router, route, location);
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}