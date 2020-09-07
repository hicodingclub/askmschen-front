// Import components for each schema
import {
  PubresourcesListGeneralComponent
} from './pubresources/pubresources-list/pubresources-list-general.component';
import {
  PubresourcesDetailComponent
} from './pubresources/pubresources-detail/pubresources-detail.component';
import {
  MemresourcesListGeneralComponent
} from './memresources/memresources-list/memresources-list-general.component';
import {
  MemresourcesDetailComponent
} from './memresources/memresources-detail/memresources-detail.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
export const pubresourcesRoutingCorePath = [{
  path: 'list',
  component: PubresourcesListGeneralComponent
}, {
  path: 'detail/:id',
  component: PubresourcesDetailComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const memresourcesRoutingCorePath = [{
  path: 'list',
  component: MemresourcesListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MemresourcesDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];