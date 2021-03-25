import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EmailingCoreModule } from '../emailing/emailing.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    EmailingCoreModule,
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
export class EmailingCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Thu Feb 25 2021 00:24:39 GMT-0800 (Pacific Standard Time)

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
  EmailingCoreModule
} from '../emailing/emailing.core.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    EmailingCoreModule,
  ],
  declarations: [],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class EmailingCustModule {}**** End of recent updates.<<<*/
