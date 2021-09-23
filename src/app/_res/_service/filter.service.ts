import {Injectable} from '@angular/core';
import {IRandomCompany} from "../_types/types";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  /*
  * сабжект для слежки изменений фильтрации и поиска.
   */
  form$ = new Subject<string[]>();

  /*массив из типов компаний
  * */
  types: any[] = ['All'];

  /*массив из видов деятельности компаний
  * */
  industries: any[] = ['All'];

  /*выбрааный тип для фильтрации
  * */
  type: string = '';

  /*выбрааный вид деятельности для фильтрации
  * */
  industry: string = '';

  /*Текст поиска
  * */
  search: string = '';

  constructor() {
  }

  /*
  *фильтрация по типу виду деятельности и поиск
   */
  filterChange(res: IRandomCompany[]) {
    if (!this.search && !this.type && !this.industry) {
      return res
    } else {
      // @ts-ignore
      let result = res.filter((e: IRandomCompany) => {
        // @ts-ignore
        return e.business_name.toLowerCase().search(this.search?.toLowerCase()) !== -1
      });

      result = result.filter((item: IRandomCompany) => {
        return !this.type || this.type === 'All' || this.type === item.type;
      })

      result = result.filter((item: IRandomCompany) => {
        return !this.industry || this.industry === 'All' || this.industry === item.industry;
      })

      return result
    }
  }

  /*
  *отслеживание изменений значения инпута для поиска
   */
  searchChange(search: string): void {
    this.form$.next([search, this.type, this.industry])
    this.search = search;
  }

  /*
*отслеживание изменений значения типа компаний для фильтрации
 */
  typeChange(type: string): void {
    this.form$.next([this.search, type, this.industry])
    this.type = type;
  }

  /*
*отслеживание изменений значения вида детельности для фильтрации
 */
  industryChange(industry: string): void {
    this.form$.next([this.search, this.type, industry])
    this.industry = industry;
  }

  /*
  * добаволение значений типа компаний и вида деятельности
   */
  setTypeAndIndustry(res: any[]) {
    res.forEach(item => {
      if (this.industries.indexOf(item.industry) === -1) {
        this.industries.push(item.industry)
      } else if (this.types.indexOf(item.type) === -1) {
        this.types.push(item.type)
      }
      return;
    })
  }
}
