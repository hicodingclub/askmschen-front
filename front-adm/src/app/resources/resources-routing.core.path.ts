// Import components for each schema
import {
  PubresourcesListGeneralComponent
} from './pubresources/pubresources-list/pubresources-list-general.component';
import {
  PubresourcesDetailComponent
} from './pubresources/pubresources-detail/pubresources-detail.component';
import {
  PubresourcesEditComponent
} from './pubresources/pubresources-edit/pubresources-edit.component';
import {
  MemresourcesListGeneralComponent
} from './memresources/memresources-list/memresources-list-general.component';
import {
  MemresourcesDetailComponent
} from './memresources/memresources-detail/memresources-detail.component';
import {
  MemresourcesEditComponent
} from './memresources/memresources-edit/memresources-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
export const pubresourcesRoutingCorePath = [{
  path: 'list',
  component: PubresourcesListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: PubresourcesDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: PubresourcesEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: PubresourcesEditComponent,
  canActivate: [AuthGuard]
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
  path: 'edit/:id',
  component: MemresourcesEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MemresourcesEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];