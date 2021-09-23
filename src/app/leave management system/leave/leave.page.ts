import { Component, OnInit } from '@angular/core';
import { leave } from '../model/leave.module';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {
  userType : string;
  userTypeId: number;
  leaves:leave[];

  constructor(private leaveService:LeaveService) { }

  ngOnInit() {
    this.leaves = this.leaveService.getLeave();
    this.userType ="User";
    this.userTypeId= 1;
  }

}
