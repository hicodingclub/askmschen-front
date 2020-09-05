import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MuserListViewComponent
} from './muser-list-view.component';
@Component({
  selector: 'app-muser-list-view-widget-table',
  templateUrl: './muser-list-view-widget-table.component.html',
  styleUrls: ['./muser-list-view-widget-table.component.css'],
})
export class MuserListViewWidgetTableComponent extends MuserListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}