import {
  Component,
  OnInit,
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
  NewsDetailComponent
} from './news-detail.component';
import {
  NewsService
} from '../news.service';
@Component({
  selector: 'app-news-detail-sub',
  templateUrl: './news-detail-sub.component.html',
  styleUrls: ['./news-detail.component.css', './news-detail-sub.component.css']
})
export class NewsDetailSubComponent extends NewsDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public newsService: NewsService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(newsService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}