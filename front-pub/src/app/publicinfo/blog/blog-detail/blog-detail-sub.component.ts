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
  BlogDetailComponent
} from './blog-detail.component';
import {
  BlogService
} from '../blog.service';
@Component({
  selector: 'app-blog-detail-sub',
  templateUrl: './blog-detail-sub.component.html',
  styleUrls: ['./blog-detail.component.css', './blog-detail-sub.component.css']
})
export class BlogDetailSubComponent extends BlogDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public blogService: BlogService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(blogService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}