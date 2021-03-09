import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-community-discussion',
  templateUrl: './community-discussion.component.html',
  styleUrls: ['./community-discussion.component.scss']
})
export class CommunityDiscussionComponent implements OnInit {

  constructor() { }

  @Input() game;
  ngOnInit(): void {
    console.log(this.game?.Name);
  }

}
