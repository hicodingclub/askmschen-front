import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  BlogListViewComponent
} from './blog-list-view.component';
@Component({
  selector: 'app-blog-list-view-widget-table',
  templateUrl: './blog-list-view-widget-table.component.html',
  styleUrls: ['./blog-list-view-widget-table.component.css'],
})
export class BlogListViewWidgetTableComponent extends BlogListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}