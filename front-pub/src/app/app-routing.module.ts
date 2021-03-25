import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { BlogComponent } from "./pages/blog/blog.component";
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
    { path: 'services', loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
