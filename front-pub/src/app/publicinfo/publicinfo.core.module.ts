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
  BlogComponent
} from './blog/blog.component';
import {
  BlogListComponent
} from './blog/blog-list/blog-list.component';
import {
  BlogListCustComponent
} from '../publicinfo-cust/base/blog/blog-list.cust.component';
import {
  BlogListWidgetGalleryBottomTitleComponent
} from './blog/blog-list/blog-list-widget-galleryBottomTitle.component';
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
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    FileUploadModule,
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
    BlogComponent,
    BlogListComponent,
    BlogListCustComponent,
    BlogListWidgetGalleryBottomTitleComponent,
    BlogDetailCustComponent,
    BlogDetailComponent,
    BlogDetailWidgetPostComponent,
    BlogDetailFieldComponent,
  ],
  exports: [
    PublicinfoComponent,
    NewsListComponent,
    NewsDetailComponent,
    NewsDetailWidgetPostComponent,
    NewsDetailFieldComponent,
    BlogListComponent,
    BlogListWidgetGalleryBottomTitleComponent,
    BlogDetailComponent,
    BlogDetailWidgetPostComponent,
    BlogDetailFieldComponent,
  ],
  providers: [{
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    NewsDetailWidgetPostComponent,
    BlogListWidgetGalleryBottomTitleComponent,
    BlogDetailWidgetPostComponent,
  ]
})
export class PublicinfoCoreModule {}