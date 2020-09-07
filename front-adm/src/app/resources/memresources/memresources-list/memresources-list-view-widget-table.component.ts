import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MemresourcesListViewComponent
} from './memresources-list-view.component';
@Component({
  selector: 'app-memresources-list-view-widget-table',
  templateUrl: './memresources-list-view-widget-table.component.html',
  styleUrls: ['./memresources-list-view-widget-table.component.css'],
})
export class MemresourcesListViewWidgetTableComponent extends MemresourcesListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}