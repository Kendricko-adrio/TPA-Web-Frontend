import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-game-page',
  templateUrl: './search-game-page.component.html',
  styleUrls: ['./search-game-page.component.scss']
})
export class SearchGamePageComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
  ) {
  }

  searchKey: string;

  ngOnInit(): void {
    this.searchKey = this.actRoute.snapshot.paramMap.get('search');
    console.log(this.searchKey);
  }

}
