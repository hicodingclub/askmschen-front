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
  MpicturegroupListComponent
} from './mpicturegroup-list.component';
import {
  MpicturegroupService
} from '../mpicturegroup.service';
@Component({
  selector: 'app-mpicturegroup-list-general',
  templateUrl: './mpicturegroup-list-general.component.html',
  styleUrls: ['./mpicturegroup-list.component.css', './mpicturegroup-list-general.component.css']
})
export class MpicturegroupListGeneralComponent extends MpicturegroupListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public mpicturegroupService: MpicturegroupService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpicturegroupService, injector, router, route, location);
    this.listViews = ['table', 'list', 'grid', ];
    this.listViewFilter = 'table';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}