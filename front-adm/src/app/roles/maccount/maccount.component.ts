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
  MaccountService
} from './maccount.service';
const itemCamelName = 'account';
export {
  ViewType
};
import {
  ViewChild
} from '@angular/core';
import {
  ElementRef
} from '@angular/core';
@Component({
  template: '',
})
export class MaccountComponent extends MddsBaseComponent implements OnInit {
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
  @ViewChild('RolesModal', {
    static: true
  }) public focusEl: ElementRef;
  constructor(public maccountService: MaccountService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(maccountService, injector, router, route, location);
    this.setItemNames(itemCamelName);
    this.briefFieldsInfo = [
      ['username', 'Username'],
      ['email', 'Email'],
      ['phone', 'Phone'],
      ['firstname', 'Firstname'],
      ['lastname', 'Lastname'],
      ['since', 'Since'],
      ['regtype', 'Regtype'],
      ['status', 'Status'],
    ];
    this.requiredFields = ['username', 'password', ];
    this.emailFields = [
      ['Email', 'email'],
    ];
    this.schemaName = 'maccount';
    this.dateFormat = 'MM-DD-YYYY';
    this.timeFormat = 'hh:mm:ss';
    this.modulePath = 'roles';
    this.indexFields = ['username', ];
  }
  ngOnInit() {
    this.style = this.style || {};
    this.options = this.options || {};
  }
}