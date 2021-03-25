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
  QuestionDetailComponent
} from './question-detail.component';
import {
  QuestionService
} from '../question.service';
@Component({
  selector: 'app-question-detail-sub',
  templateUrl: './question-detail-sub.component.html',
  styleUrls: ['./question-detail.component.css', './question-detail-sub.component.css']
})
export class QuestionDetailSubComponent extends QuestionDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public questionService: QuestionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(questionService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}