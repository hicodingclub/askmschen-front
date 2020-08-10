// Import components for each schema
import {
  NewsListComponent
} from './news/news-list/news-list.component';
import {
  NewsDetailWidgetPostComponent
} from './news/news-detail/news-detail-widget-post.component';
import {
  BlogListComponent
} from './blog/blog-list/blog-list.component';
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
  component: NewsListComponent
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
  component: BlogListComponent
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