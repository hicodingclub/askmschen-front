import {
  Routes
} from '@angular/router';
import {
  PublicinfoComponent
} from '../publicinfo/publicinfo.component';
//Import routing paths
import {
  newsRoutingCorePath,
  blogRoutingCorePath,
} from '../publicinfo/publicinfo-routing.core.path';
export const PublicinfoCoreRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
  //path: '',
  // non lazy load config. Include module in app module.
  path: 'publicinfo',
  component: PublicinfoComponent,
  children: [{
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  }, {
    path: 'news',
    children: newsRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'news'
    }
  }, {
    path: 'blog',
    children: blogRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'blog'
    }
  }, ]
}, ];
import {
  PublicinfoRoutingCustPath
} from './publicinfo-routing.cust.path';
export const PublicinfoRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
  path: 'cust',
  // non lazy load config. Include module in app module.
  // path: 'publicinfo/cust',
  children: PublicinfoRoutingCustPath,
}, ];/*>>> Please check this recent updates and merge with existing ones***
**Date: Mon Sep 07 2020 16:21:41 GMT-0700 (Pacific Daylight Time)

import {
  Routes
} from '@angular/router';
import {
  PublicinfoComponent
} from '../publicinfo/publicinfo.component';
//Import routing paths
import {
  newsRoutingCorePath,
  blogRoutingCorePath,
  subscriptionRoutingCorePath,
} from '../publicinfo/publicinfo-routing.core.path';
export const PublicinfoCoreRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
  path: '',
  // non lazy load config. Include module in app module.
  // path: 'publicinfo',
  component: PublicinfoComponent,
  children: [{
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  }, {
    path: 'news',
    children: newsRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'news'
    }
  }, {
    path: 'blog',
    children: blogRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'blog'
    }
  }, {
    path: 'subscription',
    children: subscriptionRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'subscription'
    }
  }, ]
}, ];
import {
  PublicinfoRoutingCustPath
} from './publicinfo-routing.cust.path';
export const PublicinfoRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
  path: 'cust',
  // non lazy load config. Include module in app module.
  // path: 'publicinfo/cust',
  children: PublicinfoRoutingCustPath,
}, ];**** End of recent updates.<<<*/
