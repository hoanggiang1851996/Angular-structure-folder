import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from '../../core/guards/auth.guard';
import {ManageComponent} from './components/manage/manage.component';
import {RoleComponent} from './components/role/role.component';

export const routes: Routes = [
  {path: '' , component: DashboardComponent, canActivate: [AuthGuard],
  children: [
    {path: 'manager', component: ManageComponent},
    {path: 'role', component: RoleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
