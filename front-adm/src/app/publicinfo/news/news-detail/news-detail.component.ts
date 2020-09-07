import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
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
  NewsDetailCustComponent
} from '../../../publicinfo-cust/base/news/news-detail.cust.component';
import {
  ViewType
} from '../news.component';
import {
  NewsService
} from '../news.service';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent extends NewsDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public newsService: NewsService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(newsService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'signaturePicture': 'Signature Picture',
      'title': 'Title',
      'author': 'Author',
      'publishDate': 'Publish Date',
      'content': 'Content',
    };
    this.stringFields = ['signaturePicture', 'title', 'author', 'content', ];
    this.dateFields = ['publishDate', ];
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.populateDetail(this.id);
    } else if (this.searchObj) {
      // search item based on the unique value
      this.populateDetailByFields(this.searchObj);
    } else {
      console.error("Routing error for detail view... no id...");
      return;
    }
  }
  ngAfterViewInit() {}
}