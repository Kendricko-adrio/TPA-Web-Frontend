import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game} from '../../models/game';
import {ApolloService} from '../../services/apollo.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {GameSlideShow} from '../../models/game-slide-show';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.scss']
})
export class UpdateGameComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private gameService: ApolloService,
    private storage: AngularFireStorage
  ) {
  }

  game: Game;
  gameId;
  selectedBanner;
  refBanner;
  selectedImage;
  refImage;
  slideArr = [];
  genres;
  bannerUrl;
  gameUrl = [];
  gameSlideShow = [];
  genreSelected = [];
  tag;
  // arrayKosong = (num: number) => {
  //   return Array(num);
  // }

  ngOnInit(): void {
    this.game = new Game();
    this.gameId = this.actRoute.snapshot.paramMap.get('gameId');
    this.gameService.getGameById(this.gameId).subscribe(async data => {
      // this.game = data.data.getGameById;
      this.game.Name = data.data.getGameById.Name;
      this.game.Rating = data.data.getGameById.Rating;
      this.game.Image = data.data.getGameById.Image;
      this.game.ID = data.data.getGameById.ID;
      this.game.imageBanner = data.data.getGameById.imageBanner;
      this.game.systemRequirement = data.data.getGameById.systemRequirement;
      this.game.Description = data.data.getGameById.Description;
      this.game.Price = data.data.getGameById.Price;
      this.game.gameSlideShow = data.data.getGameById.gameSlideShow;
      this.game.gameSlideShow.forEach(x => {
        this.slideArr.push(x);
      });
    });
    this.gameService.getALlGenre().subscribe(async data => {
      this.genres = data.data.getAllGenre;
      console.log(data);
    });
  }

  // async onSubmitUpdate(): Promise<void> {
  //   await this.refBanner.put(this.selectedBanner);
  //   await this.refImage.put(this.selectedImage);
  //   await this.refBanner.getDownloadURL().subscribe(async data => {
  //     await console.log(data);
  //     this.game.imageBanner = data;
  //     this.game.Rating = 0;
  //     this.game.ID = 0;
  //     this.refImage.getDownloadURL().subscribe(async data2 => {
  //       this.game.Image = data2;
  //       this.gameService.updateGame(this.game).subscribe(async data1 => {
  //         console.log(data1);
  //       });
  //     });
  //   });
  //   await console.log('masuk setelah kamu');
  // }

  genreChange(event): void {
    console.log(event.target.value);
    if (this.genreSelected.includes(event.target.value)) {
      return;
    }
    this.genreSelected.push(event.target.value);
  }

  async onSubmitUpdate(): Promise<void> {
    console.log(this.bannerUrl);
    this.game.imageBanner = this.bannerUrl;
    this.game.Rating = 0;
    this.game.ID = 0;
    this.game.gameSlideShow = this.gameUrl;
    this.game.Image = 'a';
    this.game.genre = this.genreSelected;
    //
    console.log(this.game);
    this.gameService.updateGame(this.game).subscribe(async data1 => {
      console.log(data1);
    });
  }
  // insertGameBanner(event): void {
  //   console.log(event.target.files[0].name);
  //   this.selectedBanner = event.target.files[0];
  //   const imagePath = 'game/' + this.game.Name + '/imageBanner';
  //   this.refBanner = this.storage.ref(imagePath);
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

  // insertGameImage(event): void {
  //   console.log(event.target.files[0].name);
  //   this.selectedImage = event.target.files[0];
  //   const imagePath = 'game/' + this.game.Name + '/image';
  //   this.refImage = this.storage.ref(imagePath);
  // }

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
