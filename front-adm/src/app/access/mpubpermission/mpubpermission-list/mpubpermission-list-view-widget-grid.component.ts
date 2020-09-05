import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpubpermissionListViewComponent
} from './mpubpermission-list-view.component';
@Component({
  selector: 'app-mpubpermission-list-view-widget-grid',
  templateUrl: './mpubpermission-list-view-widget-grid.component.html',
  styleUrls: ['./mpubpermission-list-view-widget-grid.component.css'],
})
export class MpubpermissionListViewWidgetGridComponent extends MpubpermissionListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}