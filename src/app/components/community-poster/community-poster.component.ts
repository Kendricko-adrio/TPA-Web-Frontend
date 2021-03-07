import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-community-poster',
  templateUrl: './community-poster.component.html',
  styleUrls: ['./community-poster.component.scss']
})
export class CommunityPosterComponent implements OnInit {

  constructor(
    private postService: PostService
  ) {
  }

  @Input() post: any;
  isImage;

  isImageURL(url: string): boolean {
    if (url.match(/\.(gif|jpe?g|tiff?|png|webp|bmp|jfif)/i)) {
      // console.log("Bener");
      // console.log(url);
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.isImage = this.isImageURL(this.post.postAsset);
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
