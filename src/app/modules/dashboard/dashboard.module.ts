import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import { ManageComponent } from './components/manage/manage.component';
import { RoleComponent } from './components/role/role.component';

@NgModule({
  declarations: [DashboardComponent, ManageComponent, RoleComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
