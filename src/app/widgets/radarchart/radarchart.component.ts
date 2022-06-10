import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.css']
})
export class RadarchartComponent implements OnInit  {
  constructor(private service:DashboardService) { }
  chart: any=[];
  salesData: any = null;
  ngxchartdata: any;
  customColors = (value) => {
    console.log(value);
    return "#ff0000";
  }
  ngOnInit(): void {
    this.getDataForChart();

  }

  getDataForChart(){
    this.service.getDataForRadarChart().subscribe(data =>
     {
    this.chart=data;
     debugger;
     this.ngxchartdata = data;
     this.ngxchartdata = [...this.ngxchartdata];
     });

    }
    colorScheme = {
      domain: ['#5AA454', '#C7B42C', '#AAAAAA']
    };

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

}
