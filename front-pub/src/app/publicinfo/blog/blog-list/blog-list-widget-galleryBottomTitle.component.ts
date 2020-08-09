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
  BlogListComponent
} from './blog-list.component';
import {
  BlogService
} from '../blog.service';
@Component({
  selector: 'app-blog-list-widget-galleryBottomTitle',
  templateUrl: './blog-list-widget-galleryBottomTitle.component.html',
  styleUrls: ['./blog-list.component.css', './blog-list-widget-galleryBottomTitle.component.css'],
})
export class BlogListWidgetGalleryBottomTitleComponent extends BlogListComponent implements OnInit {
  // @Input() public options: any = {}; // { clickItemAction, largePicture, notShowTitle, notShowSubTitle}
  // @Input() public style: any = {}; // { picture: {height: '16rem'}, title: {}, subtitle: {} }
  public title: string;
  public subTitle: string;
  public pictureLink: string;
  constructor(public blogService: BlogService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(blogService, injector, router, route, location);
    this.majorUi = false;
  }
  ngOnInit() {
    super.ngOnInit();
  }
}