import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpictureListViewComponent
} from './mpicture-list-view.component';
@Component({
  selector: 'app-mpicture-list-view-widget-table',
  templateUrl: './mpicture-list-view-widget-table.component.html',
  styleUrls: ['./mpicture-list-view-widget-table.component.css'],
})
export class MpictureListViewWidgetTableComponent extends MpictureListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}