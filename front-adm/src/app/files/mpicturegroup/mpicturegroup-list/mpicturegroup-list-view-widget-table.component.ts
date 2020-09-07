import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpicturegroupListViewComponent
} from './mpicturegroup-list-view.component';
@Component({
  selector: 'app-mpicturegroup-list-view-widget-table',
  templateUrl: './mpicturegroup-list-view-widget-table.component.html',
  styleUrls: ['./mpicturegroup-list-view-widget-table.component.css'],
})
export class MpicturegroupListViewWidgetTableComponent extends MpicturegroupListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}