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
  BlogService
} from '../blog.service';
import {
  BlogDetailComponent
} from './blog-detail.component';
@Component({
  selector: 'app-blog-detail-widget-post',
  templateUrl: './blog-detail-widget-post.component.html',
  styleUrls: ['./blog-detail.component.css', './blog-detail-widget-post.component.css']
})
export class BlogDetailWidgetPostComponent extends BlogDetailComponent implements OnInit, AfterViewInit {
  constructor(public blogService: BlogService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(blogService, injector, router, route, location);
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}