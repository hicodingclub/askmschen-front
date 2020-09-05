import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  NewsListViewComponent
} from './news-list-view.component';
@Component({
  selector: 'app-news-list-view-widget-grid',
  templateUrl: './news-list-view-widget-grid.component.html',
  styleUrls: ['./news-list-view-widget-grid.component.css'],
})
export class NewsListViewWidgetGridComponent extends NewsListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}