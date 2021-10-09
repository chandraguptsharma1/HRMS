import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-week',
  templateUrl: './add-week.page.html',
  styleUrls: ['./add-week.page.scss'],
})
export class AddWeekPage  {
  campaignOne: FormGroup;

  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    
  }

  // bsInlineValue = new Date();
  // bsInlineRangeValue: Date[];
  // maxDate = new Date();
 
  // constructor() {
  //   this.maxDate.setDate(this.maxDate.getDate() + 7);
  //   this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  // }

}
