import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  ResourcesComponent
} from './resources.component';
import {
  ResourcesCoreRoutes
} from '../resources-cust/resources.conf';
@NgModule({
  imports: [RouterModule.forChild(ResourcesCoreRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class ResourcesRoutingCoreModule {}