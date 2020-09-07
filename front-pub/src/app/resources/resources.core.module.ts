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
  MddsRichtextEditorModule,
} from '@hicoder/angular-richtext';
import {
  ResourcesRoutingCoreModule
} from './resources-routing.core.module';
import {
  ResourcesComponent
} from './resources.component';
// Import components for each schema
import {
  PubresourcesComponent
} from './pubresources/pubresources.component';
import {
  PubresourcesListComponent
} from './pubresources/pubresources-list/pubresources-list.component';
import {
  PubresourcesListViewComponent
} from './pubresources/pubresources-list/pubresources-list-view.component';
import {
  PubresourcesListCustComponent
} from '../resources-cust/base/pubresources/pubresources-list.cust.component';
import {
  PubresourcesListGeneralComponent
} from './pubresources/pubresources-list/pubresources-list-general.component';
import {
  PubresourcesListViewWidgetListComponent
} from './pubresources/pubresources-list/pubresources-list-view-widget-list.component';
import {
  PubresourcesDetailComponent
} from './pubresources/pubresources-detail/pubresources-detail.component';
import {
  PubresourcesDetailCustComponent
} from '../resources-cust/base/pubresources/pubresources-detail.cust.component';
import {
  PubresourcesDetailFieldComponent
} from './pubresources/pubresources-detail/pubresources-detail-field.component';
import {
  MemresourcesComponent
} from './memresources/memresources.component';
import {
  MemresourcesListComponent
} from './memresources/memresources-list/memresources-list.component';
import {
  MemresourcesListViewComponent
} from './memresources/memresources-list/memresources-list-view.component';
import {
  MemresourcesListCustComponent
} from '../resources-cust/base/memresources/memresources-list.cust.component';
import {
  MemresourcesListGeneralComponent
} from './memresources/memresources-list/memresources-list-general.component';
import {
  MemresourcesListViewWidgetListComponent
} from './memresources/memresources-list/memresources-list-view-widget-list.component';
import {
  MemresourcesDetailComponent
} from './memresources/memresources-detail/memresources-detail.component';
import {
  MemresourcesDetailCustComponent
} from '../resources-cust/base/memresources/memresources-detail.cust.component';
import {
  MemresourcesDetailFieldComponent
} from './memresources/memresources-detail/memresources-detail-field.component';
import {
  PubresourcesDetailSubComponent
} from './pubresources/pubresources-detail/pubresources-detail-sub.component';
import {
  MemresourcesDetailSubComponent
} from './memresources/memresources-detail/memresources-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FilesModule,
    MddsRichtextEditorModule,
    ResourcesRoutingCoreModule,
  ],
  declarations: [
    ResourcesComponent,
    PubresourcesComponent,
    PubresourcesListComponent,
    PubresourcesListViewComponent,
    PubresourcesListCustComponent,
    PubresourcesListGeneralComponent,
    PubresourcesListViewWidgetListComponent,
    PubresourcesDetailCustComponent,
    PubresourcesDetailComponent,
    PubresourcesDetailFieldComponent,
    MemresourcesComponent,
    MemresourcesListComponent,
    MemresourcesListViewComponent,
    MemresourcesListCustComponent,
    MemresourcesListGeneralComponent,
    MemresourcesListViewWidgetListComponent,
    MemresourcesDetailCustComponent,
    MemresourcesDetailComponent,
    MemresourcesDetailFieldComponent,
    PubresourcesDetailSubComponent,
    MemresourcesDetailSubComponent,
  ],
  exports: [
    ResourcesComponent,
    PubresourcesListGeneralComponent,
    PubresourcesDetailComponent,
    PubresourcesDetailFieldComponent,
    MemresourcesListGeneralComponent,
    MemresourcesDetailComponent,
    MemresourcesDetailFieldComponent,
    PubresourcesDetailSubComponent,
    MemresourcesDetailSubComponent,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM-DD-YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: []
})
export class ResourcesCoreModule {}