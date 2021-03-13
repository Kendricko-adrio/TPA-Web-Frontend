import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {ItemTransactionService} from '../../services/item-transaction.service';
import {Color, Label} from 'ng2-charts';
import {ItemService} from '../../services/item.service';
import {markAsyncChunksNonInitial} from '@angular-devkit/build-angular/src/webpack/utils/async-chunks';

@Component({
  selector: 'app-market-detail-page',
  templateUrl: './market-detail-page.component.html',
  styleUrls: ['./market-detail-page.component.scss']
})
export class MarketDetailPageComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private itemTransactionService: ItemTransactionService,
    private itemService: ItemService
  ) { }
  itemId;
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
  chartReady = false;
  item;
  buyList;
  sellList;
  buyMoney;
  sellMoney;
  isTr = 0;
  myBuyList;
  mySellList;

  ngOnInit(): void {
    this.itemId = this.actRoute.snapshot.paramMap.get('itemId');
    this.setChartData();
    this.itemService.getItem(this.itemId).subscribe(async data => {
      this.item = data.data.getItem;
    });

    this.itemTransactionService.getBuy(this.itemId).valueChanges.subscribe(async data => {
      this.buyList = data.data.getBuy;
      console.log('test');
    });
    this.itemTransactionService.getSell(this.itemId).valueChanges.subscribe(async data => {
      this.sellList = data.data.getSell;
      console.log('test sell');
    });
    this.itemTransactionService.getMyBuy(this.itemId).subscribe(async data => {
      this.buyList = data.data.getMyBuy;
    });
    this.itemTransactionService.getMySell(this.itemId).subscribe(async data => {
      this.sellList = data.data.getMySell;
    });
  }

  onBuy(): void{
    this.itemTransactionService.buyItem(this.itemId, this.buyMoney).subscribe();
  }
  onSell(): void{
    this.itemTransactionService.sellItem(this.itemId, this.sellMoney).subscribe();
  }

  setChartData(): void {
    this.itemTransactionService.getTransactionByItem(this.itemId).subscribe(async data => {
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

}
