import {
  Routes
} from '@angular/router';
import {
  ResourcesComponent
} from '../resources/resources.component';
//Import routing paths
import {
  pubresourcesRoutingCorePath,
  memresourcesRoutingCorePath,
} from '../resources/resources-routing.core.path';
export const ResourcesCoreRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  path: '',
  // non lazy load config. Include module in app module.
  // path: 'resources',
  component: ResourcesComponent,
  children: [{
    path: '',
    redirectTo: 'pubresources',
    pathMatch: 'full'
  }, {
    path: 'pubresources',
    children: pubresourcesRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'pubresources'
    }
  }, {
    path: 'memresources',
    children: memresourcesRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'memresources'
    }
  }, ]
}, ];
import {
  ResourcesRoutingCustPath
} from './resources-routing.cust.path';
export const ResourcesRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  path: 'cust',
  // non lazy load config. Include module in app module.
  // path: 'resources/cust',
  children: ResourcesRoutingCustPath,
}, ];/*>>> Please check this recent updates and merge with existing ones***
**Date: Mon Sep 07 2020 15:59:57 GMT-0700 (Pacific Daylight Time)

import {
  Routes
} from '@angular/router';
import {
  ResourcesComponent
} from '../resources/resources.component';
//Import routing paths
import {
  pubresourcesRoutingCorePath,
  memresourcesRoutingCorePath,
} from '../resources/resources-routing.core.path';
export const ResourcesCoreRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  path: '',
  // non lazy load config. Include module in app module.
  // path: 'resources',
  component: ResourcesComponent,
  children: [{
    path: '',
    redirectTo: 'pubresources',
    pathMatch: 'full'
  }, {
    path: 'pubresources',
    children: pubresourcesRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'pubresources'
    }
  }, {
    path: 'memresources',
    children: memresourcesRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'memresources'
    }
  }, ]
}, ];
import {
  ResourcesRoutingCustPath
} from './resources-routing.cust.path';
export const ResourcesRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  path: 'cust',
  // non lazy load config. Include module in app module.
  // path: 'resources/cust',
  children: ResourcesRoutingCustPath,
}, ];**** End of recent updates.<<<*/
