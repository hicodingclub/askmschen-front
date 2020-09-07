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
  ActionEmailModule,
} from '@hicoder/angular-action-email';
import {
  AccessRoutingCoreModule
} from './access-routing.core.module';
import {
  AccessComponent
} from './access.component';
import {
  AccessRefSelectDirective
} from './access.component';
// Import components for each schema
import {
  MpubroleComponent
} from './mpubrole/mpubrole.component';
import {
  MpubroleListComponent
} from './mpubrole/mpubrole-list/mpubrole-list.component';
import {
  MpubroleListViewComponent
} from './mpubrole/mpubrole-list/mpubrole-list-view.component';
import {
  MpubroleListCustComponent
} from '../access-cust/base/mpubrole/mpubrole-list.cust.component';
import {
  MpubroleListGeneralComponent
} from './mpubrole/mpubrole-list/mpubrole-list-general.component';
import {
  MpubroleListSelectComponent
} from './mpubrole/mpubrole-list/mpubrole-list-select.component';
import {
  MpubroleListViewWidgetTableComponent
} from './mpubrole/mpubrole-list/mpubrole-list-view-widget-table.component';
import {
  MpubroleListViewWidgetListComponent
} from './mpubrole/mpubrole-list/mpubrole-list-view-widget-list.component';
import {
  MpubroleListViewWidgetGridComponent
} from './mpubrole/mpubrole-list/mpubrole-list-view-widget-grid.component';
import {
  MpubroleDetailComponent
} from './mpubrole/mpubrole-detail/mpubrole-detail.component';
import {
  MpubroleDetailCustComponent
} from '../access-cust/base/mpubrole/mpubrole-detail.cust.component';
import {
  MpubroleDetailFieldComponent
} from './mpubrole/mpubrole-detail/mpubrole-detail-field.component';
import {
  MpubroleEditComponent
} from './mpubrole/mpubrole-edit/mpubrole-edit.component';
import {
  MpubroleEditCustComponent
} from '../access-cust/base/mpubrole/mpubrole-edit.cust.component';
import {
  MpubmoduleComponent
} from './mpubmodule/mpubmodule.component';
import {
  MpubmoduleListComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list.component';
import {
  MpubmoduleListViewComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-view.component';
import {
  MpubmoduleListCustComponent
} from '../access-cust/base/mpubmodule/mpubmodule-list.cust.component';
import {
  MpubmoduleListGeneralComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-general.component';
import {
  MpubmoduleListSelectComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-select.component';
import {
  MpubmoduleListViewWidgetTableComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-view-widget-table.component';
import {
  MpubmoduleListViewWidgetListComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-view-widget-list.component';
import {
  MpubmoduleListViewWidgetGridComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-view-widget-grid.component';
import {
  MpubmoduleDetailComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail.component';
import {
  MpubmoduleDetailCustComponent
} from '../access-cust/base/mpubmodule/mpubmodule-detail.cust.component';
import {
  MpubmoduleDetailFieldComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-field.component';
import {
  MpubmoduleEditComponent
} from './mpubmodule/mpubmodule-edit/mpubmodule-edit.component';
import {
  MpubmoduleEditCustComponent
} from '../access-cust/base/mpubmodule/mpubmodule-edit.cust.component';
import {
  MpubpermissionComponent
} from './mpubpermission/mpubpermission.component';
import {
  MpubpermissionListComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list.component';
import {
  MpubpermissionListViewComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list-view.component';
import {
  MpubpermissionListCustComponent
} from '../access-cust/base/mpubpermission/mpubpermission-list.cust.component';
import {
  MpubpermissionListGeneralComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list-general.component';
import {
  MpubpermissionListSubComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list-sub.component';
import {
  MpubpermissionListViewWidgetTableComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list-view-widget-table.component';
import {
  MpubpermissionListViewWidgetListComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list-view-widget-list.component';
import {
  MpubpermissionListViewWidgetGridComponent
} from './mpubpermission/mpubpermission-list/mpubpermission-list-view-widget-grid.component';
import {
  MpubpermissionDetailComponent
} from './mpubpermission/mpubpermission-detail/mpubpermission-detail.component';
import {
  MpubpermissionDetailCustComponent
} from '../access-cust/base/mpubpermission/mpubpermission-detail.cust.component';
import {
  MpubpermissionDetailFieldComponent
} from './mpubpermission/mpubpermission-detail/mpubpermission-detail-field.component';
import {
  MpubpermissionEditComponent
} from './mpubpermission/mpubpermission-edit/mpubpermission-edit.component';
import {
  MpubpermissionEditCustComponent
} from '../access-cust/base/mpubpermission/mpubpermission-edit.cust.component';
import {
  MuserComponent
} from './muser/muser.component';
import {
  MuserListComponent
} from './muser/muser-list/muser-list.component';
import {
  MuserListViewComponent
} from './muser/muser-list/muser-list-view.component';
import {
  MuserListCustComponent
} from '../access-cust/base/muser/muser-list.cust.component';
import {
  MuserListGeneralComponent
} from './muser/muser-list/muser-list-general.component';
import {
  MuserListSelectComponent
} from './muser/muser-list/muser-list-select.component';
import {
  MuserListViewWidgetTableComponent
} from './muser/muser-list/muser-list-view-widget-table.component';
import {
  MuserListViewWidgetListComponent
} from './muser/muser-list/muser-list-view-widget-list.component';
import {
  MuserListViewWidgetGridComponent
} from './muser/muser-list/muser-list-view-widget-grid.component';
import {
  MuserDetailComponent
} from './muser/muser-detail/muser-detail.component';
import {
  MuserDetailCustComponent
} from '../access-cust/base/muser/muser-detail.cust.component';
import {
  MuserDetailFieldComponent
} from './muser/muser-detail/muser-detail-field.component';
import {
  MuserEditComponent
} from './muser/muser-edit/muser-edit.component';
import {
  MuserEditCustComponent
} from '../access-cust/base/muser/muser-edit.cust.component';
import {
  MuserroleComponent
} from './muserrole/muserrole.component';
import {
  MuserroleListComponent
} from './muserrole/muserrole-list/muserrole-list.component';
import {
  MuserroleListViewComponent
} from './muserrole/muserrole-list/muserrole-list-view.component';
import {
  MuserroleListCustComponent
} from '../access-cust/base/muserrole/muserrole-list.cust.component';
import {
  MuserroleListGeneralComponent
} from './muserrole/muserrole-list/muserrole-list-general.component';
import {
  MuserroleListSubComponent
} from './muserrole/muserrole-list/muserrole-list-sub.component';
import {
  MuserroleListViewWidgetTableComponent
} from './muserrole/muserrole-list/muserrole-list-view-widget-table.component';
import {
  MuserroleListViewWidgetListComponent
} from './muserrole/muserrole-list/muserrole-list-view-widget-list.component';
import {
  MuserroleListViewWidgetGridComponent
} from './muserrole/muserrole-list/muserrole-list-view-widget-grid.component';
import {
  MuserroleDetailComponent
} from './muserrole/muserrole-detail/muserrole-detail.component';
import {
  MuserroleDetailCustComponent
} from '../access-cust/base/muserrole/muserrole-detail.cust.component';
import {
  MuserroleDetailFieldComponent
} from './muserrole/muserrole-detail/muserrole-detail-field.component';
import {
  MuserroleEditComponent
} from './muserrole/muserrole-edit/muserrole-edit.component';
import {
  MuserroleEditCustComponent
} from '../access-cust/base/muserrole/muserrole-edit.cust.component';
import {
  MpubroleDetailPopComponent
} from './mpubrole/mpubrole-detail/mpubrole-detail-pop.component';
import {
  MpubroleDetailSelComponent
} from './mpubrole/mpubrole-detail/mpubrole-detail-sel.component';
import {
  MpubmoduleDetailPopComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-pop.component';
import {
  MpubmoduleDetailSelComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-sel.component';
import {
  MuserDetailPopComponent
} from './muser/muser-detail/muser-detail-pop.component';
import {
  MuserDetailSelComponent
} from './muser/muser-detail/muser-detail-sel.component';
import {
  MpubpermissionDetailSubComponent
} from './mpubpermission/mpubpermission-detail/mpubpermission-detail-sub.component';
import {
  MuserDetailSubComponent
} from './muser/muser-detail/muser-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FilesModule,
    ActionEmailModule,
    AccessRoutingCoreModule,
  ],
  declarations: [
    AccessComponent,
    AccessRefSelectDirective,
    MpubroleComponent,
    MpubroleListComponent,
    MpubroleListViewComponent,
    MpubroleListCustComponent,
    MpubroleListGeneralComponent,
    MpubroleListSelectComponent,
    MpubroleListViewWidgetTableComponent,
    MpubroleListViewWidgetListComponent,
    MpubroleListViewWidgetGridComponent,
    MpubroleDetailCustComponent,
    MpubroleDetailComponent,
    MpubroleDetailFieldComponent,
    MpubroleEditComponent,
    MpubroleEditCustComponent,
    MpubmoduleComponent,
    MpubmoduleListComponent,
    MpubmoduleListViewComponent,
    MpubmoduleListCustComponent,
    MpubmoduleListGeneralComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleListViewWidgetTableComponent,
    MpubmoduleListViewWidgetListComponent,
    MpubmoduleListViewWidgetGridComponent,
    MpubmoduleDetailCustComponent,
    MpubmoduleDetailComponent,
    MpubmoduleDetailFieldComponent,
    MpubmoduleEditComponent,
    MpubmoduleEditCustComponent,
    MpubpermissionComponent,
    MpubpermissionListComponent,
    MpubpermissionListViewComponent,
    MpubpermissionListCustComponent,
    MpubpermissionListGeneralComponent,
    MpubpermissionListSubComponent,
    MpubpermissionListViewWidgetTableComponent,
    MpubpermissionListViewWidgetListComponent,
    MpubpermissionListViewWidgetGridComponent,
    MpubpermissionDetailCustComponent,
    MpubpermissionDetailComponent,
    MpubpermissionDetailFieldComponent,
    MpubpermissionEditComponent,
    MpubpermissionEditCustComponent,
    MuserComponent,
    MuserListComponent,
    MuserListViewComponent,
    MuserListCustComponent,
    MuserListGeneralComponent,
    MuserListSelectComponent,
    MuserListViewWidgetTableComponent,
    MuserListViewWidgetListComponent,
    MuserListViewWidgetGridComponent,
    MuserDetailCustComponent,
    MuserDetailComponent,
    MuserDetailFieldComponent,
    MuserEditComponent,
    MuserEditCustComponent,
    MuserroleComponent,
    MuserroleListComponent,
    MuserroleListViewComponent,
    MuserroleListCustComponent,
    MuserroleListGeneralComponent,
    MuserroleListSubComponent,
    MuserroleListViewWidgetTableComponent,
    MuserroleListViewWidgetListComponent,
    MuserroleListViewWidgetGridComponent,
    MuserroleDetailCustComponent,
    MuserroleDetailComponent,
    MuserroleDetailFieldComponent,
    MuserroleEditComponent,
    MuserroleEditCustComponent,
    MpubroleDetailPopComponent,
    MpubroleDetailSelComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MuserDetailPopComponent,
    MuserDetailSelComponent,
    MpubpermissionDetailSubComponent,
    MuserDetailSubComponent,
  ],
  exports: [
    AccessComponent,
    MpubroleListGeneralComponent,
    MpubroleListSelectComponent,
    MpubroleDetailComponent,
    MpubroleDetailFieldComponent,
    MpubroleEditComponent,
    MpubmoduleListGeneralComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleDetailComponent,
    MpubmoduleDetailFieldComponent,
    MpubmoduleEditComponent,
    MpubpermissionListGeneralComponent,
    MpubpermissionListSubComponent,
    MpubpermissionDetailComponent,
    MpubpermissionDetailFieldComponent,
    MpubpermissionEditComponent,
    MuserListGeneralComponent,
    MuserListSelectComponent,
    MuserDetailComponent,
    MuserDetailFieldComponent,
    MuserEditComponent,
    MuserroleListGeneralComponent,
    MuserroleListSubComponent,
    MuserroleDetailComponent,
    MuserroleDetailFieldComponent,
    MuserroleEditComponent,
    MpubroleDetailPopComponent,
    MpubroleDetailSelComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MuserDetailPopComponent,
    MuserDetailSelComponent,
    MpubpermissionDetailSubComponent,
    MuserDetailSubComponent,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM-DD-YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    MpubroleListSelectComponent,
    MpubroleDetailPopComponent,
    MpubroleDetailSelComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MuserListSelectComponent,
    MuserDetailPopComponent,
    MuserDetailSelComponent,
    MpubroleEditComponent,
    MpubmoduleEditComponent,
    MpubpermissionEditComponent,
    MuserEditComponent,
    MuserroleEditComponent,
  ]
})
export class AccessCoreModule {}