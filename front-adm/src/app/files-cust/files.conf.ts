import { Routes } from '@angular/router';

import { FilesComponent } from '../files/files.component';

//Import routing paths
import { 
  mfileRoutingCorePath,
  mfilegroupRoutingCorePath,
  mpictureRoutingCorePath,
  mpicturegroupRoutingCorePath,
} from '../files/files-routing.core.path';

export const FilesCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'files',

    component: FilesComponent,
    children: [
      {path: '',  redirectTo: 'mfile', pathMatch: 'full'},

      { path: 'mfile',
        children: mfileRoutingCorePath,
        data: {mraLevel: 1, item: 'mfile'}
      },
      { path: 'mfilegroup',
        children: mfilegroupRoutingCorePath,
        data: {mraLevel: 1, item: 'mfilegroup'}
      },{
        path: 'mpicture',
        children: mpictureRoutingCorePath,
        data: {
          mraLevel: 1,
          item: 'mpicture'
        }
      }, {
        path: 'mpicturegroup',
        children: mpicturegroupRoutingCorePath,
        data: {
          mraLevel: 1,
          item: 'mpicturegroup'
        }
      },
    ]
  },
];

import { FilesRoutingCustPath } from './files-routing.cust.path';

export const FilesRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'files/cust',

    children: FilesRoutingCustPath,
  },
];/*>>> Please check this recent updates and merge with existing ones***
**Date: Mon Sep 07 2020 12:16:25 GMT-0700 (Pacific Daylight Time)

import {
  Routes
} from '@angular/router';
import {
  FilesComponent
} from '../files/files.component';
//Import routing paths
import {
  mpictureRoutingCorePath,
  mpicturegroupRoutingCorePath,
  mfileRoutingCorePath,
  mfilegroupRoutingCorePath,
} from '../files/files-routing.core.path';
export const FilesCoreRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
  path: '',
  // non lazy load config. Include module in app module.
  // path: 'files',
  component: FilesComponent,
  children: [{
    path: '',
    redirectTo: 'mpicture',
    pathMatch: 'full'
  }, {
    path: 'mpicture',
    children: mpictureRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'mpicture'
    }
  }, {
    path: 'mpicturegroup',
    children: mpicturegroupRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'mpicturegroup'
    }
  }, {
    path: 'mfile',
    children: mfileRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'mfile'
    }
  }, {
    path: 'mfilegroup',
    children: mfilegroupRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'mfilegroup'
    }
  }, ]
}, ];
import {
  FilesRoutingCustPath
} from './files-routing.cust.path';
export const FilesRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
  path: 'cust',
  // non lazy load config. Include module in app module.
  // path: 'files/cust',
  children: FilesRoutingCustPath,
}, ];**** End of recent updates.<<<*/
