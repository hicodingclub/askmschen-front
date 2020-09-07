import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  MddsBaseComponent,
  ViewType
} from '@hicoder/angular-core';
import {
  Component,
  OnInit,
  Injector,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  MpictureService
} from './mpicture.service';
const itemCamelName = 'picture';
export {
  ViewType
};
import {
  ViewChild
} from '@angular/core';
import {
  FilesRefSelectDirective
} from '../files.component';
import {
  MpicturegroupDetailPopComponent
} from '../mpicturegroup/mpicturegroup-detail/mpicturegroup-detail-pop.component';
import {
  MpicturegroupListSelectComponent
} from '../mpicturegroup/mpicturegroup-list/mpicturegroup-list-select.component';
@Component({
  template: '',
})
export class MpictureComponent extends MddsBaseComponent implements OnInit {
  // *** common input fields
  @Input()
  public style: any; // {}
  @Input()
  public options: any; // {} uiOptions
  @Input()
  public searchObj: any;
  @Input()
  public snackbarMessages: any = {}; // keys: edit, create, list, detail, delete, deleteMany TODO: archive, unarchive
  // *** list component
  @Input()
  public inputData: any;
  @Input()
  public queryParams: any; // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
  @Input()
  public categoryBy: string; //field name whose value is used as category
  @Input()
  public listViews: string[] = [];
  @Input()
  public viewInputs: any = {};
  // list-asso component
  @Input('asso') public associationField: string;
  // list select component
  @Output() outputData: any;
  // *** edit / create component
  @Input()
  public id: string;
  @Input()
  public cid: string; // copy id
  @Input()
  public initData: any; // some fields has data already. eg: {a: b}. Used for add
  @Input()
  public embeddedView: boolean;
  @Input()
  public embedMode: string; // parent to tell the action - create
  @Output()
  public doneData = new EventEmitter < boolean > ();
  @Output()
  public done = new EventEmitter < any > ();
  // *** detail component
  // @Input() 
  // public id:string;
  @Input()
  public disableActionButtons: boolean;
  @Output()
  public eventEmitter: EventEmitter < any > = new EventEmitter();
  @Input()
  public listRouterLink: string = '../../list'; // router link from detail to list
  // detail sub component
  // @Input() inputData;
  // detail show field component
  // @Input() id: string;
  @Input() detailObj: any;
  @Input() showFieldsStr: string;
  // detail sel component
  //@Input() inputData;
  //@Output() outputData;
  // detail pop component
  // @Input() inputData;
  // @Output() outputData;
  public selectComponents = {
    'group': {
      'select-type': MpicturegroupListSelectComponent,
      'pop-detail-type': MpicturegroupDetailPopComponent,
      'componentRef': null
    },
  }
  @ViewChild(FilesRefSelectDirective, {
    static: true
  }) refSelectDirective: FilesRefSelectDirective;
  constructor(public mpictureService: MpictureService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpictureService, injector, router, route, location);
    this.setItemNames(itemCamelName);
    this.briefFieldsInfo = [];
    this.briefFieldsInfo.push(['name', 'Name']);
    this.briefFieldsInfo.push(['type', 'Type']);
    this.briefFieldsInfo.push(['group', 'Group']);
    this.briefFieldsInfo.push(['labels', 'Labels']);
    this.briefFieldsInfo.push(['size', 'Size']);
    this.briefFieldsInfo.push(['link', 'Link']);
    this.briefFieldsInfo.push(['createdAt', 'Created at']);
    this.briefFieldsInfo.push(['hasThumbnail', 'Has Thumbnail']);
    this.referenceFieldsMap = {
      'group': 'mpicturegroup',
    };
    this.referenceFieldsReverseMap = {
      'mpicturegroup': 'group',
    };
    this.schemaName = 'mpicture';
    this.dateFormat = 'MM/DD/YYYY';
    this.timeFormat = 'hh:mm:ss';
    this.modulePath = 'files';
    this.indexFields = ['name', ];
  }
  ngOnInit() {
    this.style = this.style || {};
    this.options = this.options || {};
  }
}