// Import components for each schema
import {
  NewsListComponent
} from './news/news-list/news-list.component';
import {
  NewsDetailWidgetPostComponent
} from './news/news-detail/news-detail-widget-post.component';
import {
  NewsEditComponent
} from './news/news-edit/news-edit.component';
import {
  BlogListComponent
} from './blog/blog-list/blog-list.component';
import {
  BlogDetailWidgetPostComponent
} from './blog/blog-detail/blog-detail-widget-post.component';
import {
  BlogEditComponent
} from './blog/blog-edit/blog-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
export const newsRoutingCorePath = [{
  path: 'list',
  component: NewsListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: NewsDetailWidgetPostComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: NewsEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: NewsEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const blogRoutingCorePath = [{
  path: 'list',
  component: BlogListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: BlogDetailWidgetPostComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: BlogEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: BlogEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];