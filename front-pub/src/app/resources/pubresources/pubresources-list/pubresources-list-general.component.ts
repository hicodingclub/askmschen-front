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
  PubresourcesListComponent
} from './pubresources-list.component';
import {
  PubresourcesService
} from '../pubresources.service';
@Component({
  selector: 'app-pubresources-list-general',
  templateUrl: './pubresources-list-general.component.html',
  styleUrls: ['./pubresources-list.component.css', './pubresources-list-general.component.css']
})
export class PubresourcesListGeneralComponent extends PubresourcesListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public pubresourcesService: PubresourcesService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(pubresourcesService, injector, router, route, location);
    this.listViews = ['list', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}