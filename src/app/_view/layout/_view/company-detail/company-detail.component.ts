import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../../../_res/_service/data.service";
import {Subscription} from "rxjs";
import {IRandomCompany} from "../../../../_res/_types/types";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit, OnDestroy {
  /**/
  payload?: IRandomCompany = this.dataService.companyData;

  subscription = new Subscription();

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    // this.payload = ;
    // this.subscription = this.dataService.getCompanyData()
    //   .subscribe((data: IRandomCompany) => this.payload = data)
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
