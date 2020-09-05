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
  MuserListComponent
} from './muser-list.component';
import {
  MuserService
} from '../muser.service';
@Component({
  selector: 'app-muser-list-general',
  templateUrl: './muser-list-general.component.html',
  styleUrls: ['./muser-list.component.css', './muser-list-general.component.css']
})
export class MuserListGeneralComponent extends MuserListComponent implements OnInit {
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
  constructor(public muserService: MuserService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(muserService, injector, router, route, location);
    this.listViews = ['table', 'list', 'grid', ];
    this.listViewFilter = 'table';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}