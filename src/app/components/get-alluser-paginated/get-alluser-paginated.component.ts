import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-get-alluser-paginated',
  templateUrl: './get-alluser-paginated.component.html',
  styleUrls: ['./get-alluser-paginated.component.scss']
})
export class GetAlluserPaginatedComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {
  }

  users;
  currPage = 1;
  maxPage: number;

  ngOnInit(): void {
    this.userService.getALlUserPaginated(this.currPage).subscribe(async data => {
      this.users = data.data.getAllUserPaginated;
      console.log(this.users);
    });

    this.userService.getTotalUser().subscribe(data => {
      this.maxPage = Math.ceil(data.data.getTotalUser / 10);
      console.log(this.maxPage);
    });
  }

  checkIsAvailable(num): boolean {
    if (num > this.maxPage || num < 1) {
      return false;
    }
    return true;
  }

  onNext(): void {
    console.log('next');
    const nextPage = this.currPage + 1;
    if (!this.checkIsAvailable(nextPage)) {
      return;
    }
    this.currPage = nextPage;
    this.userService.getALlUserPaginated(this.currPage).subscribe(async data => {
      this.users = data.data.getAllUserPaginated;
      console.log(this.users);
    });
  }

  onPrev(): void {
    const prevPage = this.currPage - 1;
    if (!this.checkIsAvailable(prevPage)) {
      return;
    }
    this.currPage = prevPage;
    this.userService.getALlUserPaginated(this.currPage).subscribe(async data => {
      this.users = data.data.getAllUserPaginated;
      console.log(this.users);
    });
  }

}
