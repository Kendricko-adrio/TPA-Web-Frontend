import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-inventory-modal',
  templateUrl: './inventory-modal.component.html',
  styleUrls: ['./inventory-modal.component.scss']
})
export class InventoryModalComponent implements OnInit {

  constructor() { }

  @Input() item?;
  @Input() visible?;
  ngOnInit(): void {

  }

}
