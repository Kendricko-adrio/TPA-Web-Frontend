import { Component, OnInit } from '@angular/core';
import {PointService} from '../../services/point.service';

@Component({
  selector: 'app-point-avatar-tab',
  templateUrl: './point-avatar-tab.component.html',
  styleUrls: ['./point-avatar-tab.component.scss']
})
export class PointAvatarTabComponent implements OnInit {

  constructor(
    private pointService: PointService
  ) { }

  avatar;
  loadData(): void{
    this.pointService.getPurchasableAvatar().subscribe(async data => {
      this.avatar = data.data.getPurchasableAvatar;
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

}
