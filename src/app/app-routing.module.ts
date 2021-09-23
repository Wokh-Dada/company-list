import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyDetailComponent} from "./_view/layout/_view/company-detail/company-detail.component";
import {CompanyListComponent} from "./_view/layout/_view/company-list/company-list.component";

const routes: Routes = [
  {
    path: 'list',
    component: CompanyListComponent
  },
  {
    path: 'detail/:id',
    component: CompanyDetailComponent
  },
  {path: '**', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
