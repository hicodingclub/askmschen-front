import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
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
  QuestionDetailCustComponent
} from '../../../publicinfo-cust/base/question/question-detail.cust.component';
import {
  ViewType
} from '../question.component';
import {
  QuestionService
} from '../question.service';
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent extends QuestionDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public questionService: QuestionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(questionService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'name': 'Name',
      'email': 'Email',
      'question': 'Question',
    };
    this.stringFields = ['name', 'email', 'question', ];
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.populateDetail(this.id);
    } else if (this.searchObj) {
      // search item based on the unique value
      this.populateDetailByFields(this.searchObj);
    } else {
      console.error("Routing error for detail view... no id...");
      return;
    }
  }
  ngAfterViewInit() {}
}