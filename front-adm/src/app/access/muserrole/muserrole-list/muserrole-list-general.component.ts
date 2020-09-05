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
  MuserroleListComponent
} from './muserrole-list.component';
import {
  MuserroleService
} from '../muserrole.service';
@Component({
  selector: 'app-muserrole-list-general',
  templateUrl: './muserrole-list-general.component.html',
  styleUrls: ['./muserrole-list.component.css', './muserrole-list-general.component.css']
})
export class MuserroleListGeneralComponent extends MuserroleListComponent implements OnInit {
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
  constructor(public muserroleService: MuserroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(muserroleService, injector, router, route, location);
    this.listViews = ['table', 'list', 'grid', ];
    this.listViewFilter = 'table';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}