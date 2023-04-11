import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  
  {path:'',
    loadChildren:() => import('./authentication/authentication.module').then(m =>m.AuthenticationModule)},
  {path:'userpage',
    loadChildren:() => import('./dashboard/dashboard.module').then(m =>m.DashboardModule),
   canActivate: [AuthGuard]},
  {path:'admin',loadChildren:() => import('./dashboard/dashboard.module').then(m =>m.DashboardModule)},
  {path:'edit', loadChildren:() => import('./dashboard/dashboard.module').then(m =>m.DashboardModule),
  canActivate: [AuthGuard] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
