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
  MpubpermissionDetailCustComponent
} from '../../../access-cust/base/mpubpermission/mpubpermission-detail.cust.component';
import {
  ViewType
} from '../mpubpermission.component';
import {
  MpubpermissionService
} from '../mpubpermission.service';
@Component({
  selector: 'app-mpubpermission-detail',
  templateUrl: './mpubpermission-detail.component.html',
  styleUrls: ['./mpubpermission-detail.component.css']
})
export class MpubpermissionDetailComponent extends MpubpermissionDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public mpubpermissionService: MpubpermissionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpubpermissionService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'role': 'Role',
      'module': 'Module',
      'modulePermission': 'Module Permission',
      'resourcePermission': 'Resource Permission',
    };
    this.stringFields = ['modulePermission', ];
    this.referenceFields = ['role', 'module', ];
    this.mapFields = [
      ['resourcePermission', 'SchemaString', '', '', , ''],
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