import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../../../_res/_service/data.service";
import {IRandomCompany} from "../../../../_res/_types/types";
import {ReplaySubject, Subscription} from "rxjs";
import {delay} from "rxjs/operators";
import {FilterService} from "../../../../_res/_service/filter.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {
  /**/
  payload$ = new ReplaySubject<any>(1);

  /**/
  payload!: IRandomCompany[];

  /**/
  subscriptionPayload$ = new Subscription();

  /**/
  subscriptionForm$ = new Subscription();

  /*значение для сортировки
  * */
  key?: string;

  /**/
  reverse: boolean = false;

  constructor(
    private dataService: DataService,
    private filterService: FilterService
  ) {
  }

  ngOnInit(): void {
    this.dataService.getRandomCompany();
    this.subscriptionPayload$ = this.dataService.payload$
      .subscribe((rs) => {
        this.payload = rs;
        this.payload$.next(rs)
      })

    this.subscriptionForm$ = this.filterService.form$.pipe(delay(100)).subscribe((e) => {
      this.payload$.next(this.filterService.filterChange(this.payload))
    })

  }

  ngOnDestroy(): void {
    this.subscriptionPayload$.unsubscribe();
    this.subscriptionForm$.unsubscribe()
  }

  /**
   * отслеживание значений сортировки
   */
  sort(key: string): void {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
