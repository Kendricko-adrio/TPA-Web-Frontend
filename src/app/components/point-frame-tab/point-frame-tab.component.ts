import { Component, OnInit } from '@angular/core';
import {PointService} from '../../services/point.service';

@Component({
  selector: 'app-point-frame-tab',
  templateUrl: './point-frame-tab.component.html',
  styleUrls: ['./point-frame-tab.component.scss']
})
export class PointFrameTabComponent implements OnInit {

  constructor(
    private pointService: PointService
  ) { }

  frame;
  loadData(): void{
    this.pointService.getPurchasableFrame().subscribe(async data => {
      this.frame = data.data.getPurchasableFrame;
    });
  }
  ngOnInit(): void {
    this.loadData();
  }

  onBuy(frame): void{
    this.pointService.insertFrame(frame.frameId).subscribe(async data => {
      console.log('sukses');
      this.loadData();
    });
  }

}
