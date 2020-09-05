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
  MuserComponent,
  ViewType
} from '../muser.component';
import {
  MuserService
} from '../muser.service';
@Component({
  selector: 'app-muser-detail-field',
  templateUrl: './muser-detail-field.component.html',
  styleUrls: ['./muser-detail.component.css']
})
export class MuserDetailFieldComponent extends MuserComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public muserService: MuserService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(muserService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'username': 'Username',
      'email': 'Email',
      'phone': 'Phone',
      'firstname': 'Firstname',
      'lastname': 'Lastname',
      'photo': 'Photo',
      'since': 'Since',
      'regtype': 'Regtype',
      'status': 'Status',
    };
    this.enums['status'] = ['Enabled', 'Disabled', 'Pending', ];
    this.stringFields = ['username', 'email', 'phone', 'firstname', 'lastname', 'photo', 'regtype', 'status', ];
    this.dateFields = ['since', ];
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