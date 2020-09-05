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
  selector: 'app-blog-list-general',
  templateUrl: './blog-list-general.component.html',
  styleUrls: ['./blog-list.component.css', './blog-list-general.component.css']
})
export class BlogListGeneralComponent extends BlogListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = true;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public blogService: BlogService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(blogService, injector, router, route, location);
    this.listViews = ['list', 'table', 'grid', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}