import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';
import {
  NgbModule,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import {
  MDDS_NGB_DATE_FORMAT,
  MraNgbDateFormatterService,
} from '@hicoder/angular-core';
import {
  FilesModule,
} from '@hicoder/angular-file';
import {
  FilesRoutingCoreModule
} from './files-routing.core.module';
import {
  FilesComponent
} from './files.component';
import {
  FilesRefSelectDirective
} from './files.component';
// Import components for each schema
import {
  MpictureComponent
} from './mpicture/mpicture.component';
import {
  MpictureListComponent
} from './mpicture/mpicture-list/mpicture-list.component';
import {
  MpictureListViewComponent
} from './mpicture/mpicture-list/mpicture-list-view.component';
import {
  MpictureListCustComponent
} from '../files-cust/base/mpicture/mpicture-list.cust.component';
import {
  MpictureListGeneralComponent
} from './mpicture/mpicture-list/mpicture-list-general.component';
import {
  MpictureListSubComponent
} from './mpicture/mpicture-list/mpicture-list-sub.component';
import {
  MpictureListViewWidgetListComponent
} from './mpicture/mpicture-list/mpicture-list-view-widget-list.component';
import {
  MpictureListViewWidgetTableComponent
} from './mpicture/mpicture-list/mpicture-list-view-widget-table.component';
import {
  MpictureListViewWidgetGridComponent
} from './mpicture/mpicture-list/mpicture-list-view-widget-grid.component';
import {
  MpictureDetailFieldComponent
} from './mpicture/mpicture-detail/mpicture-detail-field.component';
import {
  MpictureEditComponent
} from './mpicture/mpicture-edit/mpicture-edit.component';
import {
  MpictureEditCustComponent
} from '../files-cust/base/mpicture/mpicture-edit.cust.component';
import {
  MpicturegroupComponent
} from './mpicturegroup/mpicturegroup.component';
import {
  MpicturegroupListComponent
} from './mpicturegroup/mpicturegroup-list/mpicturegroup-list.component';
import {
  MpicturegroupListViewComponent
} from './mpicturegroup/mpicturegroup-list/mpicturegroup-list-view.component';
import {
  MpicturegroupListCustComponent
} from '../files-cust/base/mpicturegroup/mpicturegroup-list.cust.component';
import {
  MpicturegroupListGeneralComponent
} from './mpicturegroup/mpicturegroup-list/mpicturegroup-list-general.component';
import {
  MpicturegroupListSelectComponent
} from './mpicturegroup/mpicturegroup-list/mpicturegroup-list-select.component';
import {
  MpicturegroupListViewWidgetTableComponent
} from './mpicturegroup/mpicturegroup-list/mpicturegroup-list-view-widget-table.component';
import {
  MpicturegroupListViewWidgetListComponent
} from './mpicturegroup/mpicturegroup-list/mpicturegroup-list-view-widget-list.component';
import {
  MpicturegroupListViewWidgetGridComponent
} from './mpicturegroup/mpicturegroup-list/mpicturegroup-list-view-widget-grid.component';
import {
  MpicturegroupListViewWidgetIndexComponent
} from './mpicturegroup/mpicturegroup-list/mpicturegroup-list-view-widget-index.component';
import {
  MpicturegroupDetailComponent
} from './mpicturegroup/mpicturegroup-detail/mpicturegroup-detail.component';
import {
  MpicturegroupDetailCustComponent
} from '../files-cust/base/mpicturegroup/mpicturegroup-detail.cust.component';
import {
  MpicturegroupDetailFieldComponent
} from './mpicturegroup/mpicturegroup-detail/mpicturegroup-detail-field.component';
import {
  MpicturegroupEditComponent
} from './mpicturegroup/mpicturegroup-edit/mpicturegroup-edit.component';
import {
  MpicturegroupEditCustComponent
} from '../files-cust/base/mpicturegroup/mpicturegroup-edit.cust.component';
import {
  MfileComponent
} from './mfile/mfile.component';
import {
  MfileListComponent
} from './mfile/mfile-list/mfile-list.component';
import {
  MfileListViewComponent
} from './mfile/mfile-list/mfile-list-view.component';
import {
  MfileListCustComponent
} from '../files-cust/base/mfile/mfile-list.cust.component';
import {
  MfileListGeneralComponent
} from './mfile/mfile-list/mfile-list-general.component';
import {
  MfileListSubComponent
} from './mfile/mfile-list/mfile-list-sub.component';
import {
  MfileListViewWidgetListComponent
} from './mfile/mfile-list/mfile-list-view-widget-list.component';
import {
  MfileListViewWidgetTableComponent
} from './mfile/mfile-list/mfile-list-view-widget-table.component';
import {
  MfileListViewWidgetGridComponent
} from './mfile/mfile-list/mfile-list-view-widget-grid.component';
import {
  MfileDetailFieldComponent
} from './mfile/mfile-detail/mfile-detail-field.component';
import {
  MfileEditComponent
} from './mfile/mfile-edit/mfile-edit.component';
import {
  MfileEditCustComponent
} from '../files-cust/base/mfile/mfile-edit.cust.component';
import {
  MfilegroupComponent
} from './mfilegroup/mfilegroup.component';
import {
  MfilegroupListComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list.component';
import {
  MfilegroupListViewComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-view.component';
import {
  MfilegroupListCustComponent
} from '../files-cust/base/mfilegroup/mfilegroup-list.cust.component';
import {
  MfilegroupListGeneralComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-general.component';
import {
  MfilegroupListSelectComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-select.component';
import {
  MfilegroupListViewWidgetTableComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-view-widget-table.component';
import {
  MfilegroupListViewWidgetListComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-view-widget-list.component';
import {
  MfilegroupListViewWidgetGridComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-view-widget-grid.component';
import {
  MfilegroupListViewWidgetIndexComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-view-widget-index.component';
import {
  MfilegroupDetailComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail.component';
import {
  MfilegroupDetailCustComponent
} from '../files-cust/base/mfilegroup/mfilegroup-detail.cust.component';
import {
  MfilegroupDetailFieldComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-field.component';
import {
  MfilegroupEditComponent
} from './mfilegroup/mfilegroup-edit/mfilegroup-edit.component';
import {
  MfilegroupEditCustComponent
} from '../files-cust/base/mfilegroup/mfilegroup-edit.cust.component';
import {
  MpicturegroupDetailPopComponent
} from './mpicturegroup/mpicturegroup-detail/mpicturegroup-detail-pop.component';
import {
  MpicturegroupDetailSelComponent
} from './mpicturegroup/mpicturegroup-detail/mpicturegroup-detail-sel.component';
import {
  MfilegroupDetailPopComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component';
import {
  MfilegroupDetailSelComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component';
import {
  MpicturegroupDetailSubComponent
} from './mpicturegroup/mpicturegroup-detail/mpicturegroup-detail-sub.component';
import {
  MfilegroupDetailSubComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FilesModule,
    FilesRoutingCoreModule,
  ],
  declarations: [
    FilesComponent,
    FilesRefSelectDirective,
    MpictureComponent,
    MpictureListComponent,
    MpictureListViewComponent,
    MpictureListCustComponent,
    MpictureListGeneralComponent,
    MpictureListSubComponent,
    MpictureListViewWidgetListComponent,
    MpictureListViewWidgetTableComponent,
    MpictureListViewWidgetGridComponent,
    MpictureDetailFieldComponent,
    MpictureEditComponent,
    MpictureEditCustComponent,
    MpicturegroupComponent,
    MpicturegroupListComponent,
    MpicturegroupListViewComponent,
    MpicturegroupListCustComponent,
    MpicturegroupListGeneralComponent,
    MpicturegroupListSelectComponent,
    MpicturegroupListViewWidgetTableComponent,
    MpicturegroupListViewWidgetListComponent,
    MpicturegroupListViewWidgetGridComponent,
    MpicturegroupListViewWidgetIndexComponent,
    MpicturegroupDetailCustComponent,
    MpicturegroupDetailComponent,
    MpicturegroupDetailFieldComponent,
    MpicturegroupEditComponent,
    MpicturegroupEditCustComponent,
    MfileComponent,
    MfileListComponent,
    MfileListViewComponent,
    MfileListCustComponent,
    MfileListGeneralComponent,
    MfileListSubComponent,
    MfileListViewWidgetListComponent,
    MfileListViewWidgetTableComponent,
    MfileListViewWidgetGridComponent,
    MfileDetailFieldComponent,
    MfileEditComponent,
    MfileEditCustComponent,
    MfilegroupComponent,
    MfilegroupListComponent,
    MfilegroupListViewComponent,
    MfilegroupListCustComponent,
    MfilegroupListGeneralComponent,
    MfilegroupListSelectComponent,
    MfilegroupListViewWidgetTableComponent,
    MfilegroupListViewWidgetListComponent,
    MfilegroupListViewWidgetGridComponent,
    MfilegroupListViewWidgetIndexComponent,
    MfilegroupDetailCustComponent,
    MfilegroupDetailComponent,
    MfilegroupDetailFieldComponent,
    MfilegroupEditComponent,
    MfilegroupEditCustComponent,
    MpicturegroupDetailPopComponent,
    MpicturegroupDetailSelComponent,
    MfilegroupDetailPopComponent,
    MfilegroupDetailSelComponent,
    MpicturegroupDetailSubComponent,
    MfilegroupDetailSubComponent,
  ],
  exports: [
    FilesComponent,
    MpictureListGeneralComponent,
    MpictureListSubComponent,
    MpictureDetailFieldComponent,
    MpictureEditComponent,
    MpicturegroupListGeneralComponent,
    MpicturegroupListSelectComponent,
    MpicturegroupDetailComponent,
    MpicturegroupDetailFieldComponent,
    MpicturegroupEditComponent,
    MfileListGeneralComponent,
    MfileListSubComponent,
    MfileDetailFieldComponent,
    MfileEditComponent,
    MfilegroupListGeneralComponent,
    MfilegroupListSelectComponent,
    MfilegroupDetailComponent,
    MfilegroupDetailFieldComponent,
    MfilegroupEditComponent,
    MpicturegroupDetailPopComponent,
    MpicturegroupDetailSelComponent,
    MfilegroupDetailPopComponent,
    MfilegroupDetailSelComponent,
    MpicturegroupDetailSubComponent,
    MfilegroupDetailSubComponent,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM/DD/YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    MpicturegroupListSelectComponent,
    MpicturegroupDetailPopComponent,
    MpicturegroupDetailSelComponent,
    MfilegroupListSelectComponent,
    MfilegroupDetailPopComponent,
    MfilegroupDetailSelComponent,
    MpicturegroupEditComponent,
    MfilegroupEditComponent,
  ]
})
export class FilesCoreModule {}