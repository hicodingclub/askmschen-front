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
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import {
  MraNgbDateFormatterService
} from './publicinfo.directive';
import {
  FileUploadModule
} from '@hicoder/angular-file';
import {
  ActionEmailModule
} from '@hicoder/angular-action-email';
import {
  MddsRichtextEditorModule
} from '@hicoder/angular-richtext';
import {
  MddsCoreModule
} from '@hicoder/angular-core';
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
  NewsListCustComponent
} from '../publicinfo-cust/base/news/news-list.cust.component';
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
  BlogListCustComponent
} from '../publicinfo-cust/base/blog/blog-list.cust.component';
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
  SubscriptionListCustComponent
} from '../publicinfo-cust/base/subscription/subscription-list.cust.component';
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
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    FileUploadModule,
    ActionEmailModule,
    MddsRichtextEditorModule,
    PublicinfoRoutingCoreModule,
  ],
  declarations: [
    PublicinfoComponent,
    NewsComponent,
    NewsListComponent,
    NewsListCustComponent,
    NewsDetailCustComponent,
    NewsDetailComponent,
    NewsDetailWidgetPostComponent,
    NewsDetailFieldComponent,
    NewsEditComponent,
    NewsEditCustComponent,
    BlogComponent,
    BlogListComponent,
    BlogListCustComponent,
    BlogDetailCustComponent,
    BlogDetailComponent,
    BlogDetailWidgetPostComponent,
    BlogDetailFieldComponent,
    BlogEditComponent,
    BlogEditCustComponent,
    SubscriptionComponent,
    SubscriptionListComponent,
    SubscriptionListCustComponent,
    SubscriptionDetailCustComponent,
    SubscriptionDetailComponent,
    SubscriptionDetailFieldComponent,
    SubscriptionEditComponent,
    SubscriptionEditCustComponent,
  ],
  exports: [
    PublicinfoComponent,
    NewsListComponent,
    NewsDetailComponent,
    NewsDetailWidgetPostComponent,
    NewsDetailFieldComponent,
    NewsEditComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogDetailWidgetPostComponent,
    BlogDetailFieldComponent,
    BlogEditComponent,
    SubscriptionListComponent,
    SubscriptionDetailComponent,
    SubscriptionDetailFieldComponent,
    SubscriptionEditComponent,
  ],
  providers: [{
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