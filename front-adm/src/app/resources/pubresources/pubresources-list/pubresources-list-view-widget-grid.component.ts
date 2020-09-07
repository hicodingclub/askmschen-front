import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  PubresourcesListViewComponent
} from './pubresources-list-view.component';
@Component({
  selector: 'app-pubresources-list-view-widget-grid',
  templateUrl: './pubresources-list-view-widget-grid.component.html',
  styleUrls: ['./pubresources-list-view-widget-grid.component.css'],
})
export class PubresourcesListViewWidgetGridComponent extends PubresourcesListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}