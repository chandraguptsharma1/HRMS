import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private employeeAPI: EmployeeService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.employeeForm = this.fb.group({
      empId: "104",
      empName: "sreelekha",
      password: "sreelekha@123",
      role: "Trainee",
      designation: "backendDeveloper",
      dob: "1998-06-14",
      doj: "2021-02-01",
      department: "IT",
      panNo: "ewipp5548",
      adharNo: "82497315",
      status: "active",
      createDate: null,
      modifiedDate: null,
      email: "sreelekha.pathipati@upvoteconsulting.com"

  })

   }
  //  onFormSubmit() {
  //   if (!this.employeeForm.valid) {
  //     return false;
  //   } else {
  //     this.employeeAPI.addEmployee(this.employeeForm.value)
  //       .subscribe((res) => {
  //         this.zone.run(() => {
  //           console.log(res)
  //           this.employeeForm.reset();
  //           this.router.navigate(['/home']);
  //         })
  //       });
  //   }
  // }

  ngOnInit() {
  }

}
