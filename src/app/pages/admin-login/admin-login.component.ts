import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  username;
  password;
  errMsg;
  ngOnInit(): void {
  }

  submit(): void{
    this.userService.getAdmin(this.username, this.password).subscribe(async data =>{
      // console.log(data.data.getAdmin);
      UserService.userAuth = data.data.getAdmin;
      this.route.navigate(['/']);
    }, (error) => {
      console.log('there was an error sending the query ', error);
      this.errMsg = 'email or pass wrong';
    });
  }

}
