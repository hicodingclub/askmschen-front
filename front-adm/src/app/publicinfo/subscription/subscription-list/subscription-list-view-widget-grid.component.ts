import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  SubscriptionListViewComponent
} from './subscription-list-view.component';
@Component({
  selector: 'app-subscription-list-view-widget-grid',
  templateUrl: './subscription-list-view-widget-grid.component.html',
  styleUrls: ['./subscription-list-view-widget-grid.component.css'],
})
export class SubscriptionListViewWidgetGridComponent extends SubscriptionListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}