import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MuserroleListViewComponent
} from './muserrole-list-view.component';
@Component({
  selector: 'app-muserrole-list-view-widget-grid',
  templateUrl: './muserrole-list-view-widget-grid.component.html',
  styleUrls: ['./muserrole-list-view-widget-grid.component.css'],
})
export class MuserroleListViewWidgetGridComponent extends MuserroleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}