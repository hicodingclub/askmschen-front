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
  FileUploadModule,
} from '@hicoder/angular-file';
import {
  ActionEmailModule,
} from '@hicoder/angular-action-email';
import {
  MddsRichtextEditorModule,
} from '@hicoder/angular-richtext';
import {
  PublicinfoRoutingCoreModule
} from './publicinfo-routing.core.module';
import {
  PublicinfoComponent
} from './publicinfo.component';
// Import components for each schema
import {
  NewsComponent
} from './news/news.component';
import {
  NewsListComponent
} from './news/news-list/news-list.component';
import {
  NewsListViewComponent
} from './news/news-list/news-list-view.component';
import {
  NewsListCustComponent
} from '../publicinfo-cust/base/news/news-list.cust.component';
import {
  NewsListGeneralComponent
} from './news/news-list/news-list-general.component';
import {
  NewsListViewWidgetListComponent
} from './news/news-list/news-list-view-widget-list.component';
import {
  NewsListViewWidgetTableComponent
} from './news/news-list/news-list-view-widget-table.component';
import {
  NewsListViewWidgetGridComponent
} from './news/news-list/news-list-view-widget-grid.component';
import {
  NewsDetailComponent
} from './news/news-detail/news-detail.component';
import {
  NewsDetailCustComponent
} from '../publicinfo-cust/base/news/news-detail.cust.component';
import {
  NewsDetailWidgetPostComponent
} from './news/news-detail/news-detail-widget-post.component';
import {
  NewsDetailFieldComponent
} from './news/news-detail/news-detail-field.component';
import {
  NewsEditComponent
} from './news/news-edit/news-edit.component';
import {
  NewsEditCustComponent
} from '../publicinfo-cust/base/news/news-edit.cust.component';
import {
  BlogComponent
} from './blog/blog.component';
import {
  BlogListComponent
} from './blog/blog-list/blog-list.component';
import {
  BlogListViewComponent
} from './blog/blog-list/blog-list-view.component';
import {
  BlogListCustComponent
} from '../publicinfo-cust/base/blog/blog-list.cust.component';
import {
  BlogListGeneralComponent
} from './blog/blog-list/blog-list-general.component';
import {
  BlogListViewWidgetListComponent
} from './blog/blog-list/blog-list-view-widget-list.component';
import {
  BlogListViewWidgetTableComponent
} from './blog/blog-list/blog-list-view-widget-table.component';
import {
  BlogListViewWidgetGridComponent
} from './blog/blog-list/blog-list-view-widget-grid.component';
import {
  BlogDetailComponent
} from './blog/blog-detail/blog-detail.component';
import {
  BlogDetailCustComponent
} from '../publicinfo-cust/base/blog/blog-detail.cust.component';
import {
  BlogDetailWidgetPostComponent
} from './blog/blog-detail/blog-detail-widget-post.component';
import {
  BlogDetailFieldComponent
} from './blog/blog-detail/blog-detail-field.component';
import {
  BlogEditComponent
} from './blog/blog-edit/blog-edit.component';
import {
  BlogEditCustComponent
} from '../publicinfo-cust/base/blog/blog-edit.cust.component';
import {
  SubscriptionComponent
} from './subscription/subscription.component';
import {
  SubscriptionListComponent
} from './subscription/subscription-list/subscription-list.component';
import {
  SubscriptionListViewComponent
} from './subscription/subscription-list/subscription-list-view.component';
import {
  SubscriptionListCustComponent
} from '../publicinfo-cust/base/subscription/subscription-list.cust.component';
import {
  SubscriptionListGeneralComponent
} from './subscription/subscription-list/subscription-list-general.component';
import {
  SubscriptionListViewWidgetListComponent
} from './subscription/subscription-list/subscription-list-view-widget-list.component';
import {
  SubscriptionListViewWidgetGridComponent
} from './subscription/subscription-list/subscription-list-view-widget-grid.component';
import {
  SubscriptionListViewWidgetTableComponent
} from './subscription/subscription-list/subscription-list-view-widget-table.component';
import {
  SubscriptionDetailComponent
} from './subscription/subscription-detail/subscription-detail.component';
import {
  SubscriptionDetailCustComponent
} from '../publicinfo-cust/base/subscription/subscription-detail.cust.component';
import {
  SubscriptionDetailFieldComponent
} from './subscription/subscription-detail/subscription-detail-field.component';
import {
  SubscriptionEditComponent
} from './subscription/subscription-edit/subscription-edit.component';
import {
  SubscriptionEditCustComponent
} from '../publicinfo-cust/base/subscription/subscription-edit.cust.component';
import {
  NewsDetailSubComponent
} from './news/news-detail/news-detail-sub.component';
import {
  BlogDetailSubComponent
} from './blog/blog-detail/blog-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FileUploadModule,
    ActionEmailModule,
    MddsRichtextEditorModule,
    PublicinfoRoutingCoreModule,
  ],
  declarations: [
    PublicinfoComponent,
    NewsComponent,
    NewsListComponent,
    NewsListViewComponent,
    NewsListCustComponent,
    NewsListGeneralComponent,
    NewsListViewWidgetListComponent,
    NewsListViewWidgetTableComponent,
    NewsListViewWidgetGridComponent,
    NewsDetailCustComponent,
    NewsDetailComponent,
    NewsDetailWidgetPostComponent,
    NewsDetailFieldComponent,
    NewsEditComponent,
    NewsEditCustComponent,
    BlogComponent,
    BlogListComponent,
    BlogListViewComponent,
    BlogListCustComponent,
    BlogListGeneralComponent,
    BlogListViewWidgetListComponent,
    BlogListViewWidgetTableComponent,
    BlogListViewWidgetGridComponent,
    BlogDetailCustComponent,
    BlogDetailComponent,
    BlogDetailWidgetPostComponent,
    BlogDetailFieldComponent,
    BlogEditComponent,
    BlogEditCustComponent,
    SubscriptionComponent,
    SubscriptionListComponent,
    SubscriptionListViewComponent,
    SubscriptionListCustComponent,
    SubscriptionListGeneralComponent,
    SubscriptionListViewWidgetListComponent,
    SubscriptionListViewWidgetGridComponent,
    SubscriptionListViewWidgetTableComponent,
    SubscriptionDetailCustComponent,
    SubscriptionDetailComponent,
    SubscriptionDetailFieldComponent,
    SubscriptionEditComponent,
    SubscriptionEditCustComponent,
    NewsDetailSubComponent,
    BlogDetailSubComponent,
  ],
  exports: [
    PublicinfoComponent,
    NewsListGeneralComponent,
    NewsDetailComponent,
    NewsDetailWidgetPostComponent,
    NewsDetailFieldComponent,
    NewsEditComponent,
    BlogListGeneralComponent,
    BlogDetailComponent,
    BlogDetailWidgetPostComponent,
    BlogDetailFieldComponent,
    BlogEditComponent,
    SubscriptionListGeneralComponent,
    SubscriptionDetailComponent,
    SubscriptionDetailFieldComponent,
    SubscriptionEditComponent,
    NewsDetailSubComponent,
    BlogDetailSubComponent,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM-DD-YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    NewsDetailWidgetPostComponent,
    NewsEditComponent,
    BlogDetailWidgetPostComponent,
    BlogEditComponent,
    SubscriptionEditComponent,
  ]
})
export class PublicinfoCoreModule {}