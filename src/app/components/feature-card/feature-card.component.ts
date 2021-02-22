import {Game} from './../../models/game';
import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApolloService} from 'src/app/services/apollo.service';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {


  games;

  // @ViewChild('test') aa;
  constructor(
    private service: ApolloService,
  ) {
  }

  // clicked(): void{
  //   this.aa.nativeElement.style.display = 'none'
  // }

  ngOnInit(): void {

    this.service.getGames().subscribe(async data => {
      this.games = data.data.allGame;
      // this.items.push(data.data.games)
      // console.log("DATA: ", data);


    });
    // console.log(this.items)
  }

}
