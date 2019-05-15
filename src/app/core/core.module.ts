import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from '../modules/auth/auth.module';
import {DashboardModule} from '../modules/dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    DashboardModule
  ]
})
export class CoreModule { }
