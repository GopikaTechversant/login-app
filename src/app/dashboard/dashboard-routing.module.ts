import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './components/user-page/user-page.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminComponent } from './components/admin/admin.component';
const routes: Routes = [
    {path:'',component:UserPageComponent},
    {path:'edit',component:EditComponent},
    {path:'admin',component:AdminComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DashboardRoutingModule{}