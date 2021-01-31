import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recent-game',
  templateUrl: './recent-game.component.html',
  styleUrls: ['./recent-game.component.scss']
})
export class RecentGameComponent implements OnInit {

  @Input() game;
  constructor() { }

  ngOnInit(): void {
    console.log(this.game);
  }

}
