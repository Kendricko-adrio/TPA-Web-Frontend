import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-insert-game',
  templateUrl: './insert-game.component.html',
  styleUrls: ['./insert-game.component.scss']
})
export class InsertGameComponent implements OnInit {

  game: Game;
  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.game = new Game();

  }

  onSubmit(): void{

  }
}
