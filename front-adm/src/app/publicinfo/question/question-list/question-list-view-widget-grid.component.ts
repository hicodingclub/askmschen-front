import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  QuestionListViewComponent
} from './question-list-view.component';
@Component({
  selector: 'app-question-list-view-widget-grid',
  templateUrl: './question-list-view-widget-grid.component.html',
  styleUrls: ['./question-list-view-widget-grid.component.css'],
})
export class QuestionListViewWidgetGridComponent extends QuestionListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}