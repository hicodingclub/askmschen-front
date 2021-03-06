// Import components for each schema
import {
  MroleListGeneralComponent
} from './mrole/mrole-list/mrole-list-general.component';
import {
  MroleDetailComponent
} from './mrole/mrole-detail/mrole-detail.component';
import {
  MroleEditComponent
} from './mrole/mrole-edit/mrole-edit.component';
import {
  MmoduleListGeneralComponent
} from './mmodule/mmodule-list/mmodule-list-general.component';
import {
  MmoduleDetailComponent
} from './mmodule/mmodule-detail/mmodule-detail.component';
import {
  MmoduleEditComponent
} from './mmodule/mmodule-edit/mmodule-edit.component';
import {
  MpermissionListGeneralComponent
} from './mpermission/mpermission-list/mpermission-list-general.component';
import {
  MpermissionDetailComponent
} from './mpermission/mpermission-detail/mpermission-detail.component';
import {
  MpermissionEditComponent
} from './mpermission/mpermission-edit/mpermission-edit.component';
import {
  MpermissionListSubComponent
} from './mpermission/mpermission-list/mpermission-list-sub.component';
import {
  MaccountListGeneralComponent
} from './maccount/maccount-list/maccount-list-general.component';
import {
  MaccountDetailComponent
} from './maccount/maccount-detail/maccount-detail.component';
import {
  MaccountEditComponent
} from './maccount/maccount-edit/maccount-edit.component';
import {
  MaccountroleListGeneralComponent
} from './maccountrole/maccountrole-list/maccountrole-list-general.component';
import {
  MaccountroleDetailComponent
} from './maccountrole/maccountrole-detail/maccountrole-detail.component';
import {
  MaccountroleEditComponent
} from './maccountrole/maccountrole-edit/maccountrole-edit.component';
import {
  MaccountroleListSubComponent
} from './maccountrole/maccountrole-list/maccountrole-list-sub.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
const mpermissionSubPath = [{
  path: 'list',
  component: MpermissionListSubComponent
}];
const maccountroleSubPath = [{
  path: 'list',
  component: MaccountroleListSubComponent
}];
const mroleDetailPath = [{
  path: 'mpermission',
  children: mpermissionSubPath,
  data: {
    'mraLevel': 2,
    'item': 'mpermission'
  }
}, {
  path: 'maccountrole',
  children: maccountroleSubPath,
  data: {
    'mraLevel': 2,
    'item': 'maccountrole'
  }
}, ];
const mmoduleDetailPath = [{
  path: 'mpermission',
  children: mpermissionSubPath,
  data: {
    'mraLevel': 2,
    'item': 'mpermission'
  }
}, ];
const maccountDetailPath = [{
  path: 'maccountrole',
  children: maccountroleSubPath,
  data: {
    'mraLevel': 2,
    'item': 'maccountrole'
  }
}, ];
export const mroleRoutingCorePath = [{
  path: 'list',
  component: MroleListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MroleDetailComponent,
  children: mroleDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MroleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MroleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const mmoduleRoutingCorePath = [{
  path: 'list',
  component: MmoduleListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MmoduleDetailComponent,
  children: mmoduleDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MmoduleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MmoduleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const mpermissionRoutingCorePath = [{
  path: 'list',
  component: MpermissionListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MpermissionDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MpermissionEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MpermissionEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const maccountRoutingCorePath = [{
  path: 'list',
  component: MaccountListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MaccountDetailComponent,
  children: maccountDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MaccountEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MaccountEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const maccountroleRoutingCorePath = [{
  path: 'list',
  component: MaccountroleListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MaccountroleDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MaccountroleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MaccountroleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];