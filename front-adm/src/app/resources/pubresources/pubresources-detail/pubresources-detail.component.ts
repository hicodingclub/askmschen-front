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
  PubresourcesDetailCustComponent
} from '../../../resources-cust/base/pubresources/pubresources-detail.cust.component';
import {
  ViewType
} from '../pubresources.component';
import {
  PubresourcesService
} from '../pubresources.service';
@Component({
  selector: 'app-pubresources-detail',
  templateUrl: './pubresources-detail.component.html',
  styleUrls: ['./pubresources-detail.component.css']
})
export class PubresourcesDetailComponent extends PubresourcesDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public pubresourcesService: PubresourcesService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(pubresourcesService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'title': 'Title',
      'subTitle': 'Sub Title',
      'topicTags': 'Topic Tags',
      'description': 'Description',
      'attachments': 'Attachments',
      'createdAt': 'Publish Date',
    };
    this.stringFields = ['title', 'subTitle', 'description', ];
    this.dateFields = ['createdAt', ];
    this.arrayFields = [
      ['topicTags', 'SchemaString', {
        "mraType": "",
        "urlDisplay": ""
      }, ],
      ['attachments', 'SchemaString', {
        "mraType": "file",
        "urlDisplay": ""
      }, ],
    ];
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