import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListFilterPipe } from '../shared/list-filter.pipe';

@NgModule({
  declarations: [HomeComponent, ListFilterPipe],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
