import {Component, Input, OnInit} from '@angular/core';
import {ReportService} from '../../services/report.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unsuspend-request',
  templateUrl: './unsuspend-request.component.html',
  styleUrls: ['./unsuspend-request.component.scss']
})
export class UnsuspendRequestComponent implements OnInit {

  constructor(
    private reportService: ReportService,
    private router: Router
  ) {
  }

  @Input() userId: number;
  isRequest: boolean;
  userRequest;
  ngOnInit(): void {
    this.reportService.getUnsuspendRequest(this.userId).subscribe(async data => {
        console.log(data.data.getUnsuspendByUserId);
        this.userRequest = data.data.getUnsuspendByUserId;
        console.log(this.userRequest.requestId);
        this.isRequest = true;
      },
      error => {
        console.log('salah');
        this.isRequest = false;
      });
  }

  onAccept(requestId): void{
    // console.log(this.userRequest.requestId);
    this.reportService.acceptRequest(requestId).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin/manage-user']);
    });
  }

  onReject(requestId): void{
    // console.log(this.userRequest.requestId);
    this.reportService.declineRequest(requestId).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin/manage-user']);
    });
  }

}
