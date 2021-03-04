import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-game-slideshow-preview',
  templateUrl: './game-slideshow-preview.component.html',
  styleUrls: ['./game-slideshow-preview.component.scss']
})
export class GameSlideshowPreviewComponent implements OnInit, OnChanges {


  constructor() {}
  @Input() game: any;
  previewImage ;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.game);
    this.previewImage = this.game.gameSlideShow[0].slideShowUrl;
  }

  onChangePreview(imageUrl): void{
    this.previewImage = imageUrl;
  }

  ngOnInit(): void {
    // console.log(this.game);
    // this.previewImage = this.game.gameSlideShow[0].slideShowUrl;
  }

}
