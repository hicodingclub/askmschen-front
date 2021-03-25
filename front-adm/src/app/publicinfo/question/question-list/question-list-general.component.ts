import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
import {
  QuestionListComponent
} from './question-list.component';
import {
  QuestionService
} from '../question.service';
@Component({
  selector: 'app-question-list-general',
  templateUrl: './question-list-general.component.html',
  styleUrls: ['./question-list.component.css', './question-list-general.component.css']
})
export class QuestionListGeneralComponent extends QuestionListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = false;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public questionService: QuestionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(questionService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}