import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-numbercard-co2',
  templateUrl: './numbercard-co2.component.html',
  styleUrls: ['./numbercard-co2.component.css']
})
export class NumbercardCO2Component implements OnInit {
  customColors = (value) => {
    console.log(value);
    return "#66CCFF";
  }

  cardColor: string = '#FFFFFF';
  chart: any = [];
  salesData: any = null;
  ngxchartdata: any;
  constructor(private service: DashboardService) {

  }
  ngOnInit(): void {
    this.getDataForChart();

  }
  getDataForChart() {
    this.service.getDataForNumberCO2Card().subscribe(data => {
      this.chart = data;
      debugger;
      this.ngxchartdata = data;
      this.ngxchartdata = [...this.ngxchartdata];
    });

  }
}
