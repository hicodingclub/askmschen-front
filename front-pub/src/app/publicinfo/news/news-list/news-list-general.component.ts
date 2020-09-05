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
  NewsListComponent
} from './news-list.component';
import {
  NewsService
} from '../news.service';
@Component({
  selector: 'app-news-list-general',
  templateUrl: './news-list-general.component.html',
  styleUrls: ['./news-list.component.css', './news-list-general.component.css']
})
export class NewsListGeneralComponent extends NewsListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public newsService: NewsService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(newsService, injector, router, route, location);
    this.listViews = ['list', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}