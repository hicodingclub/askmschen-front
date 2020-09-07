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
  MpicturegroupComponent,
  ViewType
} from '../mpicturegroup.component';
import {
  MpicturegroupService
} from '../mpicturegroup.service';
@Component({
  selector: 'app-mpicturegroup-detail-field',
  templateUrl: './mpicturegroup-detail-field.component.html',
  styleUrls: ['./mpicturegroup-detail.component.css']
})
export class MpicturegroupDetailFieldComponent extends MpicturegroupComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public mpicturegroupService: MpicturegroupService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpicturegroupService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'name': 'Name',
      'createdAt': 'Created at',
    };
    this.stringFields = ['name', ];
    this.dateFields = ['createdAt', ];
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