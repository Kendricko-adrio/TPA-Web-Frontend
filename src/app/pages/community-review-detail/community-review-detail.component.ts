import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {ApolloService} from '../../services/apollo.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-community-review-detail',
  templateUrl: './community-review-detail.component.html',
  styleUrls: ['./community-review-detail.component.scss']
})
export class CommunityReviewDetailComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private postService: PostService,
    private gameService: ApolloService,
    private userService: UserService
  ) { }

  post;
  game;
  user;
  isImage;
  command;
  commandLenght;
  maxPaginate;
  currPage = 1;
  userAuth;
  currCommand;

  loadData(): void{
    this.user = UserService.userAuth;
    const postId = this.actRoute.snapshot.paramMap.get('postId');
    this.postService.getPost(postId).subscribe(async data => {
      this.post = data.data.getPost;
      console.log(this.post);
      this.maxPaginate = Math.ceil(this.post.commandDetail.length / 10);
      console.log(this.maxPaginate);
      this.userService.getUserById(this.post.userId).subscribe(async data1 => {
        this.user = data1.data.getUserById;
      });
      this.gameService.getGameById(this.post.gameId).subscribe(async data1 => {
        this.game = data1.data.getGameById;
      });
    });
    this.postService.getCommandPaginate(postId, 1).subscribe(async data => {
      this.command = data.data.getCommandPaginate;
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  onAddCommand(): void{
    this.postService.insertCommand(this.post.postId, this.currCommand).subscribe(data => {
      this.currCommand = '';
      this.loadData();
    });
  }

  onNext(): void {
    if (this.currPage - 1 < 1 && this.currPage + 1 > this.maxPaginate) {
      return;
    }
    this.currPage += 1;
    this.postService.getCommandPaginate(this.post.postId, this.currPage).subscribe(async data => {
      this.command = data.data.getCommandPaginate;
    });
  }

  onPrev(): void {
    if (this.currPage - 1 < 1 && this.currPage + 1 > this.maxPaginate) {
      return;
    }
    this.currPage -= 1;
    this.postService.getCommandPaginate(this.post.postId, this.currPage).subscribe(async data => {
      this.command = data.data.getCommandPaginate;
    });
  }

}
