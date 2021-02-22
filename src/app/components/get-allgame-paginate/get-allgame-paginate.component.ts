import {Component, Input, OnInit} from '@angular/core';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-get-allgame-paginate',
  templateUrl: './get-allgame-paginate.component.html',
  styleUrls: ['./get-allgame-paginate.component.scss']
})
export class GetAllgamePaginateComponent implements OnInit {

  constructor(private gameService: ApolloService) {
  }

  @Input() games;
  @Input() pages;
  @Input() gameCurr;
  ngOnInit(): void {


  }

  changePage(pageNumber){
    console.log(pageNumber);
    this.gameService.getGamePaginate(pageNumber).subscribe(async data => {
      console.log(data);
      this.games = data.data.getAllGamesPaginated;
    });
  }

}
