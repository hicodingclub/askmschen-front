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
  MpubroleListComponent
} from './mpubrole-list.component';
import {
  MpubroleService
} from '../mpubrole.service';
@Component({
  selector: 'app-mpubrole-list-general',
  templateUrl: './mpubrole-list-general.component.html',
  styleUrls: ['./mpubrole-list.component.css', './mpubrole-list-general.component.css']
})
export class MpubroleListGeneralComponent extends MpubroleListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = true;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public mpubroleService: MpubroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpubroleService, injector, router, route, location);
    this.listViews = ['table', 'list', 'grid', ];
    this.listViewFilter = 'table';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}