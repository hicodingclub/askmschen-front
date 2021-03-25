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
  QuestionComponent,
  ViewType
} from '../question.component';
import {
  QuestionService
} from '../question.service';
@Component({
  selector: 'app-question-detail-field',
  templateUrl: './question-detail-field.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailFieldComponent extends QuestionComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
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
    if (!this.showFieldsStr) {
      console.error("A field has to be given to show it.");
      return;
    }
    this.showFields = this.showFieldsStr.match(/\S+/g);
    if (this.detailObj) {
      this.onDetailReturned(this.detailObj, null);
    } else {
      if (!this.id) this.id = this.id;
      if (this.id) this.populateDetail(this.id);
      else {
        console.error("No id provided to show info");
        return;
      }
    }
  }
}