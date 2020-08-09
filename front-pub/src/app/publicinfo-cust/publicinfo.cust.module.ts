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
  PublicinfoCoreModule
} from '../publicinfo/publicinfo.core.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PublicinfoCoreModule,
  ],
  declarations: [],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class PublicinfoCustModule {}