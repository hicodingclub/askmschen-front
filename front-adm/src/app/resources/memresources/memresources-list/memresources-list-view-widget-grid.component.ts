import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MemresourcesListViewComponent
} from './memresources-list-view.component';
@Component({
  selector: 'app-memresources-list-view-widget-grid',
  templateUrl: './memresources-list-view-widget-grid.component.html',
  styleUrls: ['./memresources-list-view-widget-grid.component.css'],
})
export class MemresourcesListViewWidgetGridComponent extends MemresourcesListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}