import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveDetailPageRoutingModule } from './leave-detail-routing.module';

import { LeaveDetailPage } from './leave-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveDetailPageRoutingModule
  ],
  declarations: [LeaveDetailPage]
})
export class LeaveDetailPageModule {}
