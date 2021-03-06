import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pay-slip-summary',
  templateUrl: './pay-slip-summary.page.html',
  styleUrls: ['./pay-slip-summary.page.scss'],
})
export class PaySlipSummaryPage implements AfterViewInit {
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  doughnutChart: any;

  constructor() { }

  ngAfterViewInit() {
    
    // this.doughnutChartMethod();
    
  }
  
  // doughnutChartMethod() {
  //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
  //     // type: 'doughnut',
  //     data: {
  //       labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [50, 29, 15, 10, 7],
  //         backgroundColor: [
  //           'rgba(255, 159, 64, 0.2)',
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)'
  //         ],
  //         hoverBackgroundColor: [
  //           '#FFCE56',
  //           '#FF6384',
  //           '#36A2EB',
  //           '#FFCE56',
  //           '#FF6384'
  //         ]
  //       }]
  //     }
  //   });
  // }
}
