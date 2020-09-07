// Import components for each schema
import {
  MpictureListGeneralComponent
} from './mpicture/mpicture-list/mpicture-list-general.component';
import {
  MpictureEditComponent
} from './mpicture/mpicture-edit/mpicture-edit.component';
import {
  MpictureListSubComponent
} from './mpicture/mpicture-list/mpicture-list-sub.component';
import {
  MpicturegroupListGeneralComponent
} from './mpicturegroup/mpicturegroup-list/mpicturegroup-list-general.component';
import {
  MpicturegroupDetailComponent
} from './mpicturegroup/mpicturegroup-detail/mpicturegroup-detail.component';
import {
  MpicturegroupEditComponent
} from './mpicturegroup/mpicturegroup-edit/mpicturegroup-edit.component';
import {
  MfileListGeneralComponent
} from './mfile/mfile-list/mfile-list-general.component';
import {
  MfileEditComponent
} from './mfile/mfile-edit/mfile-edit.component';
import {
  MfileListSubComponent
} from './mfile/mfile-list/mfile-list-sub.component';
import {
  MfilegroupListGeneralComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-general.component';
import {
  MfilegroupDetailComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail.component';
import {
  MfilegroupEditComponent
} from './mfilegroup/mfilegroup-edit/mfilegroup-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
const mpictureSubPath = [{
  path: 'list',
  component: MpictureListSubComponent
}];
const mfileSubPath = [{
  path: 'list',
  component: MfileListSubComponent
}];
const mpicturegroupDetailPath = [{
  path: 'mpicture',
  children: mpictureSubPath,
  data: {
    'mraLevel': 2,
    'item': 'mpicture'
  }
}, ];
const mfilegroupDetailPath = [{
  path: 'mfile',
  children: mfileSubPath,
  data: {
    'mraLevel': 2,
    'item': 'mfile'
  }
}, ];
export const mpictureRoutingCorePath = [{
  path: 'list',
  component: MpictureListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MpictureEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const mpicturegroupRoutingCorePath = [{
  path: 'list',
  component: MpicturegroupListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MpicturegroupDetailComponent,
  children: mpicturegroupDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MpicturegroupEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MpicturegroupEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const mfileRoutingCorePath = [{
  path: 'list',
  component: MfileListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MfileEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const mfilegroupRoutingCorePath = [{
  path: 'list',
  component: MfilegroupListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MfilegroupDetailComponent,
  children: mfilegroupDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MfilegroupEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MfilegroupEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];