import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserPageComponent } from './components/user-page/user-page.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { EditComponent } from './components/edit/edit.component';
@NgModule({
  declarations: [
    UserPageComponent,
    AdminComponent,
    EditComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
   
  ]
})
export class DashboardModule { }
