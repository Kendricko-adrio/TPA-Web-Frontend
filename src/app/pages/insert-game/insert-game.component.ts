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
  genres;
  slideArr;
  genreSelected = [];
  gameSlideShow = [];
  gameUrl = [];
  genreTemp;
  bannerUrl;

  genreChange(event): void {
    console.log(event.target.value);
    if (this.genreSelected.includes(event.target.value)) {
      return;
    }
    this.genreSelected.push(event.target.value);
  }

  ngOnInit(): void {
    this.game = new Game();
    this.gameService.getALlGenre().subscribe(async data => {
      this.genres = data.data.getAllGenre;
      console.log(data);
    });
  }

  onSubmit(): void{
    console.log(this.bannerUrl);
    this.game.imageBanner = this.bannerUrl;
    this.game.Rating = 0;
    this.game.ID = 0;
    this.game.genre = this.genreSelected;
    this.game.gameSlideShow = this.gameUrl;
    this.game.Image = 'a';
    //
    console.log(this.game);
    this.gameService.insertGame(this.game).subscribe(async data1 => {
              console.log(data1);
    });
  }

  // async onSubmit(): Promise<void> {
  //   await this.refBanner.put(this.selectedBanner);
  //   await this.refImage.put(this.selectedImage);
  //   await this.refBanner.getDownloadURL().subscribe(async data => {
  //     await console.log(data);
  //     this.game.imageBanner = data;
  //     this.game.Rating = 0;
  //     this.game.ID = 0;
  //     this.game.genre = this.genreSelected;
  //     this.refImage.getDownloadURL().subscribe(async data2 => {
  //       this.game.Image = data2;
  //       this.gameService.insertGame(this.game).subscribe(async data1 => {
  //         console.log(data1);
  //       });
  //     });
  //   });
  //   await console.log('masuk setelah kamu');
  // }

  insertGameBanner(event): void {
    console.log(event.target.files[0].name);
    this.selectedBanner = event.target.files[0];
    const imagePath = 'game/' + this.game.Name + '/imageBanner';
    this.refBanner = this.storage.ref(imagePath);
    this.refBanner.put(this.selectedBanner);
    this.refBanner.getDownloadURL().subscribe( async data => {
      // console.log(data);
      this.bannerUrl = data;
    });
  }

  insertGameImage(event): void {
    // console.log(event.target.files[0].name);
    // this.selectedImage = event.target.files[0];
    // const imagePath = 'game/' + this.game.Name + '/image';
    // this.refImage = this.storage.ref(imagePath);
    console.log(event.target.files.length);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < event.target.files.length; i++) {
      const selectedImage = event.target.files[i];
      const imagePath = 'game/' + this.game.Name + '/image' + (i + 1);
      const refImage = this.storage.ref(imagePath);
      const obj = {image: selectedImage, ref: refImage};
      refImage.put(selectedImage);
      refImage.getDownloadURL().subscribe(async data => {
        console.log(data);
        this.gameUrl.push(data);
      });
      this.gameSlideShow.push(obj);
    }
    console.log(this.gameSlideShow);
  }

}
