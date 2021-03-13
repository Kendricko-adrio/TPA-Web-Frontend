import { Component, OnInit } from '@angular/core';
import {PointService} from '../../services/point.service';

@Component({
  selector: 'app-point-minibg-tab',
  templateUrl: './point-minibg-tab.component.html',
  styleUrls: ['./point-minibg-tab.component.scss']
})
export class PointMinibgTabComponent implements OnInit {

  constructor(
    private pointService: PointService
  ) { }
  mini;
  ngOnInit(): void {
    this.pointService.getPurchasableMini().subscribe(async data => {
      this.mini = data.data.getPurchasableMini;
    });
  }

}
