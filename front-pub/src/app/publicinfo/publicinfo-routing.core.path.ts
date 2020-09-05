// Import components for each schema
import {
  NewsListGeneralComponent
} from './news/news-list/news-list-general.component';
import {
  NewsDetailWidgetPostComponent
} from './news/news-detail/news-detail-widget-post.component';
import {
  BlogListGeneralComponent
} from './blog/blog-list/blog-list-general.component';
import {
  BlogDetailWidgetPostComponent
} from './blog/blog-detail/blog-detail-widget-post.component';
import {
  SubscriptionEditComponent
} from './subscription/subscription-edit/subscription-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
export const newsRoutingCorePath = [{
  path: 'list',
  component: NewsListGeneralComponent
}, {
  path: 'detail/:id',
  component: NewsDetailWidgetPostComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const blogRoutingCorePath = [{
  path: 'list',
  component: BlogListGeneralComponent
}, {
  path: 'detail/:id',
  component: BlogDetailWidgetPostComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const subscriptionRoutingCorePath = [{
  path: 'new',
  component: SubscriptionEditComponent
}, ];