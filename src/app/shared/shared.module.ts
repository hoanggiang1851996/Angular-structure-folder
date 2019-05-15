import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [SidebarComponent],
  exports: [
    SidebarComponent,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
