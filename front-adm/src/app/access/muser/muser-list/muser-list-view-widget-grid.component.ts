import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MuserListViewComponent
} from './muser-list-view.component';
@Component({
  selector: 'app-muser-list-view-widget-grid',
  templateUrl: './muser-list-view-widget-grid.component.html',
  styleUrls: ['./muser-list-view-widget-grid.component.css'],
})
export class MuserListViewWidgetGridComponent extends MuserListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}