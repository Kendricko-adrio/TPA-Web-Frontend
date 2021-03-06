import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feature-badge-card',
  templateUrl: './feature-badge-card.component.html',
  styleUrls: ['./feature-badge-card.component.scss']
})
export class FeatureBadgeCardComponent implements OnInit {

  constructor() { }
  @Input() badge;
  ngOnInit(): void {
  }

}
