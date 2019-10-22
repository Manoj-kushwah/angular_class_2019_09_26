import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListFilterPipe } from './shared/list-filter.pipe';
import { NavbarDirective } from './shared/navbar.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
