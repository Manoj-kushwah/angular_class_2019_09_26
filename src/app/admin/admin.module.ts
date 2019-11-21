import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserListFilterPipe } from '../shared/user-list-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, UserListFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
