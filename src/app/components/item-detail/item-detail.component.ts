import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  constructor() { }
  @Input() item;
  ngOnInit(): void {
  }

}
