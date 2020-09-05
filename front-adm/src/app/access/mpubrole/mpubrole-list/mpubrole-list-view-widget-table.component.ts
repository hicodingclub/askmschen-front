import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpubroleListViewComponent
} from './mpubrole-list-view.component';
@Component({
  selector: 'app-mpubrole-list-view-widget-table',
  templateUrl: './mpubrole-list-view-widget-table.component.html',
  styleUrls: ['./mpubrole-list-view-widget-table.component.css'],
})
export class MpubroleListViewWidgetTableComponent extends MpubroleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}