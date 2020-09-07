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
  MemresourcesListComponent
} from './memresources-list.component';
import {
  MemresourcesService
} from '../memresources.service';
@Component({
  selector: 'app-memresources-list-general',
  templateUrl: './memresources-list-general.component.html',
  styleUrls: ['./memresources-list.component.css', './memresources-list-general.component.css']
})
export class MemresourcesListGeneralComponent extends MemresourcesListComponent implements OnInit {
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
  constructor(public memresourcesService: MemresourcesService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(memresourcesService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}