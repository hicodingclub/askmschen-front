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
  MemresourcesComponent,
  ViewType
} from '../memresources.component';
import {
  MemresourcesService
} from '../memresources.service';
@Component({
  selector: 'app-memresources-detail-field',
  templateUrl: './memresources-detail-field.component.html',
  styleUrls: ['./memresources-detail.component.css']
})
export class MemresourcesDetailFieldComponent extends MemresourcesComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public memresourcesService: MemresourcesService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(memresourcesService, injector, router, route, location);
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