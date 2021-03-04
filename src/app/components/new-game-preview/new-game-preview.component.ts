import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-game-preview',
  templateUrl: './new-game-preview.component.html',
  styleUrls: ['./new-game-preview.component.scss']
})
export class NewGamePreviewComponent implements OnInit {

  constructor() { }
  @Input() game;
  ngOnInit(): void {
  }

}
