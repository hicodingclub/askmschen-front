import {
  Routes
} from '@angular/router';
import {
  AccessComponent
} from '../access/access.component';
//Import routing paths
import {
  mpubroleRoutingCorePath,
  mpubmoduleRoutingCorePath,
  mpubpermissionRoutingCorePath,
  muserRoutingCorePath,
  muserroleRoutingCorePath,
} from '../access/access-routing.core.path';
export const AccessCoreRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
  path: '',
  // non lazy load config. Include module in app module.
  // path: 'access',
  component: AccessComponent,
  children: [{
    path: '',
    redirectTo: 'mpubrole',
    pathMatch: 'full'
  }, {
    path: 'mpubrole',
    children: mpubroleRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'mpubrole'
    }
  }, {
    path: 'mpubmodule',
    children: mpubmoduleRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'mpubmodule'
    }
  }, {
    path: 'mpubpermission',
    children: mpubpermissionRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'mpubpermission'
    }
  }, {
    path: 'muser',
    children: muserRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'muser'
    }
  }, {
    path: 'muserrole',
    children: muserroleRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'muserrole'
    }
  }, ]
}, ];
import {
  AccessRoutingCustPath
} from './access-routing.cust.path';
export const AccessRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
  path: 'cust',
  // non lazy load config. Include module in app module.
  // path: 'access/cust',
  children: AccessRoutingCustPath,
}, ];/*>>> Please check this recent updates and merge with existing ones***
**Date: Thu Feb 25 2021 00:24:42 GMT-0800 (Pacific Standard Time)

import {
  Routes
} from '@angular/router';
import {
  AccessComponent
} from '../access/access.component';
//Import routing paths
import {
  mpubroleRoutingCorePath,
  mpubmoduleRoutingCorePath,
  mpubpermissionRoutingCorePath,
  muserRoutingCorePath,
  muserroleRoutingCorePath,
} from '../access/access-routing.core.path';
export const AccessCoreRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
  path: '',
  // non lazy load config. Include module in app module.
  // path: 'access',
  component: AccessComponent,
  children: [{
    path: '',
    redirectTo: 'mpubrole',
    pathMatch: 'full'
  }, {
    path: 'mpubrole',
    children: mpubroleRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'mpubrole'
    }
  }, {
    path: 'mpubmodule',
    children: mpubmoduleRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'mpubmodule'
    }
  }, {
    path: 'mpubpermission',
    children: mpubpermissionRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'mpubpermission'
    }
  }, {
    path: 'muser',
    children: muserRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'muser'
    }
  }, {
    path: 'muserrole',
    children: muserroleRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'muserrole'
    }
  }, ]
}, ];
import {
  AccessRoutingCustPath
} from './access-routing.cust.path';
export const AccessRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
  path: 'cust',
  // non lazy load config. Include module in app module.
  // path: 'access/cust',
  children: AccessRoutingCustPath,
}, ];**** End of recent updates.<<<*/
