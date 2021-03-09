import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  posts;
  tab = 1;
  games;
  onChangeTab(tab): void{
    this.tab = tab;
  }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(async data => {
      this.posts = data.data.getAllPost;
      console.log(this.posts);
    });
    this.postService.getGameInDiscussion().subscribe(async data =>{
      this.games = data.data.getGameInDiscussion;
    });
  }

}
