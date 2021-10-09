import { Injectable } from '@angular/core';
import { leave } from '../model/leave.module';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {


leave:leave[]=[
  {
    id:'emp01',
    reason:"Sick",
    status:"pending",
    date:"20 aug 2021",
    managerName:"Sapan kumar",
    userName:"chandragupt"
      
  },
  {
    id:'emp02',
    reason:"Sick",
    status:"reject",
    date:"20 aug 2021",
    managerName:"Vijay Kumar",
    userName:"Sagar Nag"
      
  },
  {
    id:'emp03',
    reason:"Sick",
    status:"approve",
    date:"20 aug 2021",
    managerName:"Rahul kumar",
    userName:"Sonu"
      
  },
]
getLeave():leave[]{
  return[...this.leave ]}

getleaveId(leaveId:String ){
    return {
      ... this.leave.find(leave=>
        {
           return leave.id===leaveId;
        }
    )};
}

  constructor() { }
}
