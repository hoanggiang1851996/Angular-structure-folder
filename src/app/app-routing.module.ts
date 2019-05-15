import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const appRoutes: Routes = [
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
