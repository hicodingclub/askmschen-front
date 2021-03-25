import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CollegeAppsComponent } from './collegeApps/collegeApps.component';
import { CampsComponent } from './camps/camps.component';
import { PlanningComponent } from './planning/planning.component';
import { HomestayComponent } from './homestay/homestay.component';

const routes: Routes = [
  { path: 'collegeApps', component: CollegeAppsComponent },
  { path: 'camps', component: CampsComponent },
  { path: 'planning', component: PlanningComponent},
  { path: 'homestay', component: HomestayComponent},

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CollegeAppsComponent,
    CampsComponent,
    PlanningComponent,
    HomestayComponent,
  ],
  exports: [RouterModule]
})

export class ServicesModule { }