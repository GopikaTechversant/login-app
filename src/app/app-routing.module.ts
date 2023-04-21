import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  
  {path:'userpage',
    loadChildren:() => import('./dashboard/dashboard.module').then(m =>m.DashboardModule)
   },
  {path:'admin',loadChildren:() => import('./dashboard/dashboard.module').then(m =>m.DashboardModule)},
  {path:'edit', loadChildren:() => import('./dashboard/dashboard.module').then(m =>m.DashboardModule)
   },
  {path:'',
    loadChildren:() => import('./authentication/authentication.module').then(m =>m.AuthenticationModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
