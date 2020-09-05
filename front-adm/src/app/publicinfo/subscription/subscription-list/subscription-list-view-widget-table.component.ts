import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  SubscriptionListViewComponent
} from './subscription-list-view.component';
@Component({
  selector: 'app-subscription-list-view-widget-table',
  templateUrl: './subscription-list-view-widget-table.component.html',
  styleUrls: ['./subscription-list-view-widget-table.component.css'],
})
export class SubscriptionListViewWidgetTableComponent extends SubscriptionListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}