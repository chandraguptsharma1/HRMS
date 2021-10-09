import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWeekPageRoutingModule } from './add-week-routing.module';

import { AddWeekPage } from './add-week.page';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWeekPageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
    
  ],
  declarations: [AddWeekPage]
})
export class AddWeekPageModule {}
