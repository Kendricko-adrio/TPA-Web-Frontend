import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent implements OnInit {

  constructor(
    private postService: PostService,
    private storage: AngularFireStorage,
    private gameService: ApolloService
  ) { }

  posts;
  tab = 1;
  games;
  selectedBanner;
  refBanner;
  bannerUrl;
  postDesc;

  reviewDesc;
  help;
  gameChoose;
  gameReview;
  ngOnInit(): void {
    this.postService.getAllPost().subscribe(async data => {
      this.posts = data.data.getAllPost;
      console.log(this.posts);
    });
    this.postService.getGameInDiscussion().subscribe(async data =>{
      this.games = data.data.getGameInDiscussion;
    });
    this.gameService.getGames().subscribe(async data => {
      this.gameChoose = data.data.allGame;
    });
  }

  insertGameBanner(event): void {
    console.log(event.target.files[0].name);
    this.selectedBanner = event.target.files[0];
    console.log(this.selectedBanner);
    // const imagePath = 'post/' + event.target.files[0].name + '/imageBanner' + Math.floor(Math.random() * 100);
    const imagePath = 'post/' + event.target.files[0].name + '/imageBanner';
    this.refBanner = this.storage.ref(imagePath);
    this.refBanner.put(this.selectedBanner);
    this.refBanner.getDownloadURL().subscribe( async data => {
      console.log(data);
      this.bannerUrl = data;
    });
  }

  onSubmitReview(): void{
    this.postService.insertReview(this.reviewDesc, this.help, this.gameReview).subscribe(data => {
      console.log('sukses');
    });
  }

  onSubmitPost(): void{
    this.postService.insertPost(this.postDesc, this.bannerUrl).subscribe(data => {
      console.log('sukses');
    });
  }

  onChangeTab(tab): void{
    this.tab = tab;
  }
}
