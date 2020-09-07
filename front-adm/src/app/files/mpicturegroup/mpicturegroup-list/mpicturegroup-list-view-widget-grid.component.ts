import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpicturegroupListViewComponent
} from './mpicturegroup-list-view.component';
@Component({
  selector: 'app-mpicturegroup-list-view-widget-grid',
  templateUrl: './mpicturegroup-list-view-widget-grid.component.html',
  styleUrls: ['./mpicturegroup-list-view-widget-grid.component.css'],
})
export class MpicturegroupListViewWidgetGridComponent extends MpicturegroupListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}