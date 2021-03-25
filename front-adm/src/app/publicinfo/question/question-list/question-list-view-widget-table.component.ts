import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  QuestionListViewComponent
} from './question-list-view.component';
@Component({
  selector: 'app-question-list-view-widget-table',
  templateUrl: './question-list-view-widget-table.component.html',
  styleUrls: ['./question-list-view-widget-table.component.css'],
})
export class QuestionListViewWidgetTableComponent extends QuestionListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}