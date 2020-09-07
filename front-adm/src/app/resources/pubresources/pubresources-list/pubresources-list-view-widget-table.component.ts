import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  PubresourcesListViewComponent
} from './pubresources-list-view.component';
@Component({
  selector: 'app-pubresources-list-view-widget-table',
  templateUrl: './pubresources-list-view-widget-table.component.html',
  styleUrls: ['./pubresources-list-view-widget-table.component.css'],
})
export class PubresourcesListViewWidgetTableComponent extends PubresourcesListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}