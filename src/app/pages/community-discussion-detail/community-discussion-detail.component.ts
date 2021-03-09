import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {ApolloService} from '../../services/apollo.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-community-discussion-detail',
  templateUrl: './community-discussion-detail.component.html',
  styleUrls: ['./community-discussion-detail.component.scss']
})
export class CommunityDiscussionDetailComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private postService: PostService,
    private gameService: ApolloService,
    private userService: UserService
  ) { }

  postId;
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
  ngOnInit(): void {
    this.userAuth = UserService.userAuth;
    this.postId = this.actRoute.snapshot.paramMap.get('postId');
    this.postService.getPost(this.postId).subscribe(async data => {
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
  }

  onSubmit(): void{
    this.postService.insertCommand(this.post.postId, this.currCommand).subscribe(data => {
      this.currCommand = '';
    });
  }

}
