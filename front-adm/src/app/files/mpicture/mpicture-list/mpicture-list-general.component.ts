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
  MpictureListComponent
} from './mpicture-list.component';
import {
  MpictureService
} from '../mpicture.service';
@Component({
  selector: 'app-mpicture-list-general',
  templateUrl: './mpicture-list-general.component.html',
  styleUrls: ['./mpicture-list.component.css', './mpicture-list-general.component.css']
})
export class MpictureListGeneralComponent extends MpictureListComponent implements OnInit {
  public clickItemAction: string = '';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = false;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public mpictureService: MpictureService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpictureService, injector, router, route, location);
    this.listViews = ['list', 'table', 'grid', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}