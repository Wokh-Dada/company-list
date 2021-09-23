import {Component, OnInit} from '@angular/core';
import {DataService} from "./_res/_service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit(): void {
    function subtract(first: number[], second: number[]): number[] {
      return first.filter(item => {
        return second.indexOf(item) === -1
      })
    }

    console.log(subtract([1, 2, 3, 4, 5], [1, 3, 5]))
  }
}
