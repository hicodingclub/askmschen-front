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
  EmailtemplateComponent,
  ViewType
} from '../emailtemplate.component';
import {
  EmailtemplateService
} from '../emailtemplate.service';
@Component({
  selector: 'app-emailtemplate-detail-field',
  templateUrl: './emailtemplate-detail-field.component.html',
  styleUrls: ['./emailtemplate-detail.component.css']
})
export class EmailtemplateDetailFieldComponent extends EmailtemplateComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public emailtemplateService: EmailtemplateService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(emailtemplateService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'templateName': 'Template Name',
      'fromEmail': 'From Email',
      'subject': 'Subject',
      'content': 'Content',
      'tag': 'Tag',
    };
    this.stringFields = ['templateName', 'fromEmail', 'subject', 'content', 'tag', ];
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