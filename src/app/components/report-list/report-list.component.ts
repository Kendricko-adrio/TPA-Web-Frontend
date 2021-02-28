import {Component, Input, OnInit} from '@angular/core';
import {ReportService} from '../../services/report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

  constructor(
    private reportService: ReportService
  ) {
  }

  reports: any;
  @Input() userId: number;

  ngOnInit(): void {
    // console.log(this.userId);
    this.reportService.getReportByReported(this.userId).subscribe(async data => {
      this.reports = data.data.getReportByReported;
      console.log(this.reports);
    });
  }

}
