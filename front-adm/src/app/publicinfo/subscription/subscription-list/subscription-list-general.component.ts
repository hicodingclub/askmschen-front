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
  SubscriptionListComponent
} from './subscription-list.component';
import {
  SubscriptionService
} from '../subscription.service';
@Component({
  selector: 'app-subscription-list-general',
  templateUrl: './subscription-list-general.component.html',
  styleUrls: ['./subscription-list.component.css', './subscription-list-general.component.css']
})
export class SubscriptionListGeneralComponent extends SubscriptionListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = false;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public subscriptionService: SubscriptionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(subscriptionService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}