import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpubroleListViewComponent
} from './mpubrole-list-view.component';
@Component({
  selector: 'app-mpubrole-list-view-widget-grid',
  templateUrl: './mpubrole-list-view-widget-grid.component.html',
  styleUrls: ['./mpubrole-list-view-widget-grid.component.css'],
})
export class MpubroleListViewWidgetGridComponent extends MpubroleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}