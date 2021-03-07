import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.scss']
})
export class CommandDetailComponent implements OnInit, OnChanges {

  constructor(
    private userService: UserService,
  ) { }

  @Input() command;
  user;
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userService.getUserById(this.command.userId).subscribe(async data => {
      this.user = data.data.getUserById;
    });
  }

}
