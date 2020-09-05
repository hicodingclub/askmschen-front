import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MuserroleListViewComponent
} from './muserrole-list-view.component';
@Component({
  selector: 'app-muserrole-list-view-widget-table',
  templateUrl: './muserrole-list-view-widget-table.component.html',
  styleUrls: ['./muserrole-list-view-widget-table.component.css'],
})
export class MuserroleListViewWidgetTableComponent extends MuserroleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}