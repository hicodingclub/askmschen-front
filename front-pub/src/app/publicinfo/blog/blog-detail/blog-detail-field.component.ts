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
  BlogComponent,
  ViewType
} from '../blog.component';
import {
  BlogService
} from '../blog.service';
@Component({
  selector: 'app-blog-detail-field',
  templateUrl: './blog-detail-field.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailFieldComponent extends BlogComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public blogService: BlogService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(blogService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'signaturePicture': 'Signature Picture',
      'title': 'Title',
      'author': 'Author',
      'publishDate': 'Publish Date',
      'content': 'Content',
      'topicTags': 'Topic Tags',
    };
    this.stringFields.push('signaturePicture');
    this.stringFields.push('title');
    this.stringFields.push('author');
    this.stringFields.push('content');
    this.dateFields = ['publishDate', ];
    this.arrayFields = [
      ['topicTags', 'SchemaString'],
    ];
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