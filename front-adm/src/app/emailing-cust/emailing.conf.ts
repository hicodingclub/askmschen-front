import { Routes } from '@angular/router';

import { EmailingComponent } from '../emailing/emailing.component';

//Import routing paths
import { 
  emailtemplateRoutingCorePath,
  emailsettingsRoutingCorePath,
  emailqueueRoutingCorePath,
} from '../emailing/emailing-routing.core.path';

export const EmailingCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'emailing',

    component: EmailingComponent,
    children: [
      {path: '',  redirectTo: 'emailtemplate', pathMatch: 'full'},

      { path: 'emailtemplate',
        children: emailtemplateRoutingCorePath,
        data: {mraLevel: 1, item: 'emailtemplate'}
      },
      { path: 'emailsettings',
        children: emailsettingsRoutingCorePath,
        data: {mraLevel: 1, item: 'emailsettings'}
      },
      { path: 'emailqueue',
        children: emailqueueRoutingCorePath,
        data: {mraLevel: 1, item: 'emailqueue'}
      },
    ]
  },
];

import { EmailingRoutingCustPath } from './emailing-routing.cust.path';

export const EmailingRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'emailing/cust',

    children: EmailingRoutingCustPath,
  },
];/*>>> Please check this recent updates and merge with existing ones***
**Date: Thu Feb 25 2021 00:24:39 GMT-0800 (Pacific Standard Time)

import {
  Routes
} from '@angular/router';
import {
  EmailingComponent
} from '../emailing/emailing.component';
//Import routing paths
import {
  emailtemplateRoutingCorePath,
  emailsettingsRoutingCorePath,
  emailqueueRoutingCorePath,
} from '../emailing/emailing-routing.core.path';
export const EmailingCoreRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
  path: '',
  // non lazy load config. Include module in app module.
  // path: 'emailing',
  component: EmailingComponent,
  children: [{
    path: '',
    redirectTo: 'emailtemplate',
    pathMatch: 'full'
  }, {
    path: 'emailtemplate',
    children: emailtemplateRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'emailtemplate'
    }
  }, {
    path: 'emailsettings',
    children: emailsettingsRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'emailsettings'
    }
  }, {
    path: 'emailqueue',
    children: emailqueueRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'emailqueue'
    }
  }, ]
}, ];
import {
  EmailingRoutingCustPath
} from './emailing-routing.cust.path';
export const EmailingRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
  path: 'cust',
  // non lazy load config. Include module in app module.
  // path: 'emailing/cust',
  children: EmailingRoutingCustPath,
}, ];**** End of recent updates.<<<*/
