import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AccessCoreModule } from '../access/access.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    AccessCoreModule,
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
export class AccessCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sat Aug 08 2020 20:37:59 GMT-0700 (Pacific Daylight Time)

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
  AccessCoreModule
} from '../access/access.core.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AccessCoreModule,
  ],
  declarations: [],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class AccessCustModule {}**** End of recent updates.<<<*/
