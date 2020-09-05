import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
  AfterViewInit
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
  selector: 'app-muser-list-select',
  templateUrl: './muser-list-select.component.html',
  styleUrls: ['./muser-list.component.css', './muser-list-select.component.css']
})
export class MuserListSelectComponent extends MuserListComponent implements OnInit {
  public clickItemAction: string = '';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = true;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = false;
  public majorUi: boolean = false;
  constructor(public muserService: MuserService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(muserService, injector, router, route, location);
    this.listViews = ['table', 'list', ];
    this.listViewFilter = 'table';
  }
  ngOnInit() {
    this.queryOnNgInit = false; // don't do query on the super class.
    super.ngOnInit();
    this.listCategory1 = {}; // no do query based on category;
    this.listCategory2 = {}; // no do query based on category;
    this.selectedId = this.inputData;
    this.searchList();
  }
}