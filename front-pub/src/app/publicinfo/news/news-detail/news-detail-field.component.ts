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
  NewsComponent,
  ViewType
} from '../news.component';
import {
  NewsService
} from '../news.service';
@Component({
  selector: 'app-news-detail-field',
  templateUrl: './news-detail-field.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailFieldComponent extends NewsComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
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
    this.stringFields.push('signaturePicture');
    this.stringFields.push('title');
    this.stringFields.push('author');
    this.stringFields.push('content');
    this.dateFields = ['publishDate', ];
  }
  ngOnInit() {
    if (!this.showFieldsStr) {
      console.error("A field has to be given to show it.");
      return;
    }
    this.showFields = this.showFieldsStr.match(/\S+/g);
    if (this.detailObj) {
      this.onDetailReturned(this.detailObj, null);
    } else {
      if (!this.id) this.id = this.id;
      if (this.id) this.populateDetail(this.id);
      else {
        console.error("No id provided to show info");
        return;
      }
    }
  }
}