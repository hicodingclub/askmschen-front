import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  ResourcesRoutes
} from '../resources-cust/resources.conf';
@NgModule({
  imports: [RouterModule.forChild(ResourcesRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class ResourcesRoutingModule {}