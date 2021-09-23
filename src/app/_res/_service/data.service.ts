import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {IRandomCompany} from "../_types/types";
import {FilterService} from "./filter.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**/
  payload$ = new Subject<IRandomCompany[]>();

  /**
   */
  companyData?: IRandomCompany;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private filterService: FilterService
  ) {
    this.getRandomCompany()
  }

  getRandomCompany(): void {
    let params = new HttpParams()
    params = params.set('size', '100')

    this.http
      .get<any>('https://random-data-api.com/api/company/random_company', {params})
      .subscribe(
        (res: IRandomCompany[]) => {
          this.payload$.next(res);
          this.filterService.setTypeAndIndustry(res);
        }
      )
  }

  getCompanyData(item: IRandomCompany) {
    this.companyData = item;
  }

  // getCompanyId(): Observable<any> {
  //   this.id = this.route.snapshot.queryParams['id'];
  //   let params = new HttpParams()
  //   params = params.set('id', this.id)
  //   return this.http
  //     .get<any>('https://random-data-api.com/api/company/random_company', {params})
  //     .pipe(map((res: IRandomCompany) => res))
  // }
}
