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
  MpictureComponent,
  ViewType
} from '../mpicture.component';
import {
  MpictureService
} from '../mpicture.service';
@Component({
  selector: 'app-mpicture-detail-field',
  templateUrl: './mpicture-detail-field.component.html',
  styleUrls: ['./mpicture-detail.component.css']
})
export class MpictureDetailFieldComponent extends MpictureComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public mpictureService: MpictureService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpictureService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'name': 'Name',
      'type': 'Type',
      'group': 'Group',
      'labels': 'Labels',
      'size': 'Size',
      'link': 'Link',
      'createdAt': 'Created at',
      'hasThumbnail': 'Has Thumbnail',
    };
    this.stringFields = ['name', 'type', 'link', ];
    this.referenceFields = ['group', ];
    this.dateFields = ['createdAt', ];
    this.numberFields = ['size', ];
    this.arrayFields = [
      ['labels', 'SchemaString'],
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