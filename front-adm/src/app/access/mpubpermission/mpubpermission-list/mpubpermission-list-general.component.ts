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
  MpubpermissionListComponent
} from './mpubpermission-list.component';
import {
  MpubpermissionService
} from '../mpubpermission.service';
@Component({
  selector: 'app-mpubpermission-list-general',
  templateUrl: './mpubpermission-list-general.component.html',
  styleUrls: ['./mpubpermission-list.component.css', './mpubpermission-list-general.component.css']
})
export class MpubpermissionListGeneralComponent extends MpubpermissionListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = true;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public mpubpermissionService: MpubpermissionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpubpermissionService, injector, router, route, location);
    this.listViews = ['table', 'list', 'grid', ];
    this.listViewFilter = 'table';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}