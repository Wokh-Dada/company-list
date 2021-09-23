import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CompanyListComponent} from './_view/layout/_view/company-list/company-list.component';
import {CompanyDetailComponent} from './_view/layout/_view/company-detail/company-detail.component';
import {LayoutComponent} from './_view/layout/layout.component';
import {CompanyFilterComponent} from './_view/layout/_view/company-list/_view/company-filter/company-filter.component';
import {CompanySortComponent} from './_view/layout/_view/company-list/_view/company-sort/company-sort.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SortByPipe } from './_res/_pipe/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    LayoutComponent,
    CompanyFilterComponent,
    CompanySortComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
