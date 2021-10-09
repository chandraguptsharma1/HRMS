import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { leave } from 'src/app/model/leave.module';
import { EmployeeService } from 'src/app/services/employee.service';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.page.html',
  styleUrls: ['./leave-detail.page.scss'],
})
export class LeaveDetailPage implements OnInit {
  leave:leave;

  constructor(private activatedRoute :ActivatedRoute,private leaveService:LeaveService) { }

  ngOnInit() {
     
    this.activatedRoute.paramMap.subscribe(paraMap=>{
      if(!paraMap.has('leaveId')) {
        return;
      }
      const leaveId=paraMap.get('leaveId');
     this.leave= this.leaveService.getleaveId(leaveId);
    });
    console.log(this.leave);
  }

}
