import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpubpermissionListViewComponent
} from './mpubpermission-list-view.component';
@Component({
  selector: 'app-mpubpermission-list-view-widget-table',
  templateUrl: './mpubpermission-list-view-widget-table.component.html',
  styleUrls: ['./mpubpermission-list-view-widget-table.component.css'],
})
export class MpubpermissionListViewWidgetTableComponent extends MpubpermissionListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}