import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-profile-head',
  templateUrl: './profile-head.component.html',
  styleUrls: ['./profile-head.component.scss']
})
export class ProfileHeadComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  @Input() user: any;
  destination: string;
  editProfile(): void{
    this.destination = 'user/' + this.user.userName + '/edit';
    this.router.navigate([this.destination]);
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
