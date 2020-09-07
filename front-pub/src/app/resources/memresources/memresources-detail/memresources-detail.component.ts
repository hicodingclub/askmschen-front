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
  MemresourcesDetailCustComponent
} from '../../../resources-cust/base/memresources/memresources-detail.cust.component';
import {
  ViewType
} from '../memresources.component';
import {
  MemresourcesService
} from '../memresources.service';
@Component({
  selector: 'app-memresources-detail',
  templateUrl: './memresources-detail.component.html',
  styleUrls: ['./memresources-detail.component.css']
})
export class MemresourcesDetailComponent extends MemresourcesDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public memresourcesService: MemresourcesService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(memresourcesService, injector, router, route, location);
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
      ['topicTags', 'SchemaString'],
      ['attachments', 'SchemaString'],
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