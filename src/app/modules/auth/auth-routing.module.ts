import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {RedirectGuard} from '../../core/guards/redirect.guard';

const routes: Routes = [
  {path: 'auth/login', component: LoginComponent, canActivate: [RedirectGuard]},
  {path: 'auth/register', component: RegisterComponent, canActivate: [RedirectGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
