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
  BlogListViewWidgetGalleryBottomTitleComponent
} from './blog/blog-list/blog-list-view-widget-gallery-bottom-title.component';
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
  SubscriptionComponent
} from './subscription/subscription.component';
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
    NewsDetailCustComponent,
    NewsDetailComponent,
    NewsDetailWidgetPostComponent,
    NewsDetailFieldComponent,
    BlogComponent,
    BlogListComponent,
    BlogListViewComponent,
    BlogListCustComponent,
    BlogListGeneralComponent,
    BlogListViewWidgetListComponent,
    BlogListViewWidgetGalleryBottomTitleComponent,
    BlogDetailCustComponent,
    BlogDetailComponent,
    BlogDetailWidgetPostComponent,
    BlogDetailFieldComponent,
    SubscriptionComponent,
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
    BlogListGeneralComponent,
    BlogDetailComponent,
    BlogDetailWidgetPostComponent,
    BlogDetailFieldComponent,
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
    BlogDetailWidgetPostComponent,
    SubscriptionEditComponent,
  ]
})
export class PublicinfoCoreModule {}