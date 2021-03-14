import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../../services/item.service';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {ItemTransactionService} from '../../services/item-transaction.service';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private actRoute: ActivatedRoute,
    private itemService: ItemService,
    private itemTransactionService: ItemTransactionService,
  ) {
  }
  chartReady = false;
  user;
  items;
  gameId;
  itemPreview;
  page = 1;
  searched = '';
  isModal = false;
  @ViewChild('search', {static: true}) search: ElementRef;

  userGet;
  buyerPay;
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  itemTransaction;
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  // chartdata: ChartDataSets;

  // convertDate(date): string{
  //   const date = new Date(date);
  //   const get
  // }

  onSell(): void{
    const money = Math.round(this.buyerPay);
    console.log(this.itemPreview.itemsId);
    this.itemTransactionService.sellItem(this.itemPreview.itemsId, money).subscribe(data => {
      console.log('sukses');
    });
  }


  setChartData(): void {
    this.itemTransactionService.getTransactionByItem(this.itemPreview.itemsId).subscribe(async data => {
      this.itemTransaction = data.data.getTransactionByItem;
      console.log(this.itemTransaction);
      const arrData = [];
      const arrLabel = [];

      for (let i = 0; i < this.itemTransaction.length; i++) {
        arrData.push(this.itemTransaction[i].buyerPay);
        arrLabel.push(this.itemTransaction[i].UpdatedAt);

      }
      console.log(arrData);
      const chartdataset: ChartDataSets[] = [
        {data: arrData, label: 'money'}
      ];
      this.lineChartData = chartdataset;
      this.lineChartLabels = arrLabel;
      this.chartReady = true;
      // data.data
    });
  }

  ngOnInit(): void {
    const username = this.actRoute.snapshot.paramMap.get('username');
    this.userService.getUserByLink(username).subscribe(async data => {
      this.user = data.data.getUserByLink;
      this.gameId = this.user.games[0].ID;

      this.itemService.getUserItemsByGamePaginate(this.gameId, this.user.userID, this.page, this.searched).subscribe(async data2 => {
        this.items = data2.data.getUserItemsByGamePaginate;
        this.itemPreview = this.items[0];
        console.log(this.items);
      });
    });

    fromEvent(this.search.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {
        console.log(text);
        this.searched = text;
        this.page = 1;
        this.itemService.getUserItemsByGamePaginate(this.gameId, this.user.userID, this.page, this.searched).subscribe(async data2 => {
          this.items = data2.data.getUserItemsByGamePaginate;
          this.itemPreview = this.items[0];
          console.log(this.items);
        });
      }
    );

  }

  onGameChange(event): void {
    this.page = 1;
    this.gameId = event.target.value;
    this.itemService.getUserItemsByGamePaginate(this.gameId, this.user.userID, this.page, this.searched).subscribe(async data2 => {
      this.items = data2.data.getUserItemsByGamePaginate;
      console.log(this.items);
    });
    // console.log(this.gameId);
  }

  onNext(): void {
    this.page += 1;
    this.itemService.getUserItemsByGamePaginate(this.gameId, this.user.userID, this.page, this.searched).subscribe(async data2 => {
      this.items = data2.data.getUserItemsByGamePaginate;
      console.log(this.items);
    });
  }

  onPrev(): void {
    this.page -= 1;
    this.itemService.getUserItemsByGamePaginate(this.gameId, this.user.userID, this.page, this.searched).subscribe(async data2 => {
      this.items = data2.data.getUserItemsByGamePaginate;
      console.log(this.items);
    });
  }

  onUserChange(event): void{
    this.buyerPay = event.target.value * 1.3;
    console.log(this.buyerPay);
  }

  onBuyerChange(event): void{
    this.userGet = event.target.value * 0.7;
    console.log(this.userGet);
  }
}
