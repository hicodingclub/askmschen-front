// Import components for each schema
import {
  NewsListGeneralComponent
} from './news/news-list/news-list-general.component';
import {
  NewsDetailWidgetPostComponent
} from './news/news-detail/news-detail-widget-post.component';
import {
  NewsEditComponent
} from './news/news-edit/news-edit.component';
import {
  BlogListGeneralComponent
} from './blog/blog-list/blog-list-general.component';
import {
  BlogDetailWidgetPostComponent
} from './blog/blog-detail/blog-detail-widget-post.component';
import {
  BlogEditComponent
} from './blog/blog-edit/blog-edit.component';
import {
  SubscriptionListGeneralComponent
} from './subscription/subscription-list/subscription-list-general.component';
import {
  SubscriptionDetailComponent
} from './subscription/subscription-detail/subscription-detail.component';
import {
  SubscriptionEditComponent
} from './subscription/subscription-edit/subscription-edit.component';
import {
  QuestionListGeneralComponent
} from './question/question-list/question-list-general.component';
import {
  QuestionDetailComponent
} from './question/question-detail/question-detail.component';
import {
  QuestionEditComponent
} from './question/question-edit/question-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
export const newsRoutingCorePath = [{
  path: 'list',
  component: NewsListGeneralComponent,
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
  component: BlogListGeneralComponent,
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
export const subscriptionRoutingCorePath = [{
  path: 'list',
  component: SubscriptionListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: SubscriptionDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: SubscriptionEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: SubscriptionEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const questionRoutingCorePath = [{
  path: 'list',
  component: QuestionListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: QuestionDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: QuestionEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: QuestionEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];