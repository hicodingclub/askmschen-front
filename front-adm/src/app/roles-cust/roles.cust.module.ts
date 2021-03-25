import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RolesCoreModule } from '../roles/roles.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    RolesCoreModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class RolesCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Thu Feb 25 2021 00:24:43 GMT-0800 (Pacific Standard Time)

import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RouterModule
} from '@angular/router';
import {
  FormsModule
} from '@angular/forms';
import {
  RolesCoreModule
} from '../roles/roles.core.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RolesCoreModule,
  ],
  declarations: [],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class RolesCustModule {}**** End of recent updates.<<<*/
