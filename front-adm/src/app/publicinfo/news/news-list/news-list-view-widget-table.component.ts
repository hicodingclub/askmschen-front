import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  NewsListViewComponent
} from './news-list-view.component';
@Component({
  selector: 'app-news-list-view-widget-table',
  templateUrl: './news-list-view-widget-table.component.html',
  styleUrls: ['./news-list-view-widget-table.component.css'],
})
export class NewsListViewWidgetTableComponent extends NewsListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}