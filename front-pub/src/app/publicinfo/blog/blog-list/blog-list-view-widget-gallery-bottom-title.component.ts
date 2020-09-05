import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  BlogListViewComponent
} from './blog-list-view.component';
@Component({
  selector: 'app-blog-list-view-widget-gallery-bottom-title',
  templateUrl: './blog-list-view-widget-gallery-bottom-title.component.html',
  styleUrls: ['./blog-list-view-widget-gallery-bottom-title.component.css'],
})
export class BlogListViewWidgetGalleryBottomTitleComponent extends BlogListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}