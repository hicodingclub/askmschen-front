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
  SubscriptionComponent,
  ViewType
} from '../subscription.component';
import {
  SubscriptionService
} from '../subscription.service';
@Component({
  selector: 'app-subscription-detail-field',
  templateUrl: './subscription-detail-field.component.html',
  styleUrls: ['./subscription-detail.component.css']
})
export class SubscriptionDetailFieldComponent extends SubscriptionComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public subscriptionService: SubscriptionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(subscriptionService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'name': 'Name',
      'email': 'Email',
    };
    this.stringFields = ['name', 'email', ];
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