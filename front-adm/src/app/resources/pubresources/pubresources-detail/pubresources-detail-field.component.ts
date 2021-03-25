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
  PubresourcesComponent,
  ViewType
} from '../pubresources.component';
import {
  PubresourcesService
} from '../pubresources.service';
@Component({
  selector: 'app-pubresources-detail-field',
  templateUrl: './pubresources-detail-field.component.html',
  styleUrls: ['./pubresources-detail.component.css']
})
export class PubresourcesDetailFieldComponent extends PubresourcesComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public pubresourcesService: PubresourcesService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(pubresourcesService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'title': 'Title',
      'subTitle': 'Sub Title',
      'topicTags': 'Topic Tags',
      'description': 'Description',
      'attachments': 'Attachments',
      'createdAt': 'Publish Date',
    };
    this.stringFields = ['title', 'subTitle', 'description', ];
    this.dateFields = ['createdAt', ];
    this.arrayFields = [
      ['topicTags', 'SchemaString', {
        "mraType": "",
        "urlDisplay": ""
      }, ],
      ['attachments', 'SchemaString', {
        "mraType": "file",
        "urlDisplay": ""
      }, ],
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