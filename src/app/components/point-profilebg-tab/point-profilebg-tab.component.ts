import { Component, OnInit } from '@angular/core';
import {PointService} from '../../services/point.service';

@Component({
  selector: 'app-point-profilebg-tab',
  templateUrl: './point-profilebg-tab.component.html',
  styleUrls: ['./point-profilebg-tab.component.scss']
})
export class PointProfilebgTabComponent implements OnInit {

  constructor(
    private pointService: PointService
  ) { }

  bg;
  ngOnInit(): void {
    this.pointService.getPurchasableBg().subscribe(async data => {
      this.bg = data.data.getPurchasableBg;
    });
  }

}
