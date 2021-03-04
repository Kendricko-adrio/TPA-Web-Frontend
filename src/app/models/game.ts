import {GameSlideShow} from './game-slide-show';
import {Genre} from './genre';

export class Game {
  ID: number;
  Name: string;
  Description: string;
  Price: number;
  Rating: number;
  Image: string;
  imageBanner: string;
  tag: string;
  systemRequirement: string;
  gameSlideShow: GameSlideShow[];
  genre: number[];
}
