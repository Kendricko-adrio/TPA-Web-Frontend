import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-report-user-page',
  templateUrl: './report-user-page.component.html',
  styleUrls: ['./report-user-page.component.scss']
})
export class ReportUserPageComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private userService: UserService
  ) {
  }

  user;

  ngOnInit(): void {
    const username = this.actRoute.snapshot.paramMap.get('username');
    this.userService.getUserByUsername(username).subscribe(async data => {
      console.log(data.data.getUser);
      this.user = data.data.getUser;
    });


  }

}
