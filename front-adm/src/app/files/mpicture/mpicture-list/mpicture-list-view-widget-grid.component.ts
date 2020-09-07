import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpictureListViewComponent
} from './mpicture-list-view.component';
@Component({
  selector: 'app-mpicture-list-view-widget-grid',
  templateUrl: './mpicture-list-view-widget-grid.component.html',
  styleUrls: ['./mpicture-list-view-widget-grid.component.css'],
})
export class MpictureListViewWidgetGridComponent extends MpictureListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}