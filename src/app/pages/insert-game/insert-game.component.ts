import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {AngularFireStorage} from '@angular/fire/storage';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-insert-game',
  templateUrl: './insert-game.component.html',
  styleUrls: ['./insert-game.component.scss']
})
export class InsertGameComponent implements OnInit {

  game: Game;

  constructor(
    private storage: AngularFireStorage,
    private gameService: ApolloService
  ) {
  }

  gameBanner;
  selectedBanner;
  selectedImage;
  uploadProgress;
  refBanner;
  refImage;

  ngOnInit(): void {
    this.game = new Game();
  }

  async onSubmit(): Promise<void> {
    await this.refBanner.put(this.selectedBanner);
    await this.refImage.put(this.selectedImage);
    await this.refBanner.getDownloadURL().subscribe(async data => {
      await console.log(data);
      this.game.imageBanner = data;
      this.game.Rating = 0;
      this.game.ID = 0;
      this.refImage.getDownloadURL().subscribe(async data2 => {
        this.game.Image = data2;
        this.gameService.insertGame(this.game).subscribe(async data1 => {
          console.log(data1);
        });
      });
    });
    await console.log('masuk setelah kamu');
  }

  insertGameBanner(event): void {
    console.log(event.target.files[0].name);
    this.selectedBanner = event.target.files[0];
    const imagePath = 'game/' + this.game.Name + '/imageBanner';
    this.refBanner = this.storage.ref(imagePath);
  }

  insertGameImage(event): void {
    console.log(event.target.files[0].name);
    this.selectedImage = event.target.files[0];
    const imagePath = 'game/' + this.game.Name + '/image';
    this.refImage = this.storage.ref(imagePath);
  }

}
