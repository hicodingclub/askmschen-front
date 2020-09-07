import {
  NgModule
} from '@angular/core';
import {
  ResourcesRoutingModule
} from './resources-routing.module';
import {
  ResourcesCoreModule
} from './resources.core.module';
import {
  ResourcesCustModule
} from '../resources-cust/resources.cust.module'
@NgModule({
  imports: [
    ResourcesRoutingModule,
    ResourcesCoreModule,
    ResourcesCustModule,
  ],
  declarations: [],
  exports: [
    ResourcesCoreModule,
    ResourcesCustModule,
  ],
  providers: [],
  entryComponents: []
})
export class ResourcesModule {}