import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-edit-avatar-frame',
  templateUrl: './edit-avatar-frame.component.html',
  styleUrls: ['./edit-avatar-frame.component.scss']
})
export class EditAvatarFrameComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }
  user;
  currFrame;
  ngOnInit(): void {
    this.user = UserService.userAuth;
    this.currFrame = this.user.currFrame;
    console.log(this.currFrame);
  }

  onUpdate(): void{
    this.userService.setCurrFrame(this.currFrame).subscribe(async data => {
      console.log('berhasil');
    });
  }

}
