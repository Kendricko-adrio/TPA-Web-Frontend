import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ApolloService} from '../../services/apollo.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-community-review',
  templateUrl: './community-review.component.html',
  styleUrls: ['./community-review.component.scss']
})
export class CommunityReviewComponent implements OnInit, OnChanges {

  constructor(
    private gameService: ApolloService,
    private postService: PostService
  ) { }

  @Input() post;
  game;
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.gameService.getGameById(this.post.gameId).subscribe(async data =>{
      this.game = data.data.getGameById;
      console.log(this.game);
    });
  }


  loadPost(): void{
    this.postService.getPost(this.post.postId).subscribe(data => {
      this.post = data.data.getPost;
    });
  }

  onLike(): void{
    this.postService.insertLike(this.post.postId).subscribe(data =>{
      console.log('sukses like');
      this.loadPost();
    });
  }
  onDislike(): void{
    this.postService.insertDislike(this.post.postId).subscribe(data =>{
      console.log('sukses like');
      this.loadPost();
    });
  }

}
