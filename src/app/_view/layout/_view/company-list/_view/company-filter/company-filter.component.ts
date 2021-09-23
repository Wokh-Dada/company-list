import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FilterService} from "../../../../../../_res/_service/filter.service";

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent implements OnInit {
  /**/
  form = new FormGroup({
    search: new FormControl(''),
    industry: new FormControl(''),
    type: new FormControl('')
  })

  /**/
  types = this.filterService.types;

  /**/
  industries = this.filterService.industries;

  constructor(
    private filterService: FilterService
  ) {
  }

  ngOnInit(): void {
  }

  searchChange(search: string): void {
    this.filterService.searchChange(search);
  }

  typeChange(type: string): void {
    this.filterService.typeChange(type);
  }

  industryChange(industry: string): void {
    this.filterService.industryChange(industry);
  }
}
