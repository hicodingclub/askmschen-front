import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from '../emailing/emailing.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    

    NgbModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [

    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
  ],
})
export class EmailingExtModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Mon Sep 07 2020 12:16:24 GMT-0700 (Pacific Daylight Time)

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
  NgbModule,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import {
  MDDS_NGB_DATE_FORMAT,
  MraNgbDateFormatterService
} from '@hicoder/angular-core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [],
  exports: [],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM-DD-YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [],
})
export class EmailingExtModule {}**** End of recent updates.<<<*/
