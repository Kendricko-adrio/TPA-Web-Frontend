import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  styleUrls: ['./mini-profile.component.scss']
})
export class MiniProfileComponent implements OnInit {

  constructor() { }
  @Input() user;
  @Input() imgBg;
  ngOnInit(): void {
  }

}
