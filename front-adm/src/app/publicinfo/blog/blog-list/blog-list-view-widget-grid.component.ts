import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  BlogListViewComponent
} from './blog-list-view.component';
@Component({
  selector: 'app-blog-list-view-widget-grid',
  templateUrl: './blog-list-view-widget-grid.component.html',
  styleUrls: ['./blog-list-view-widget-grid.component.css'],
})
export class BlogListViewWidgetGridComponent extends BlogListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}