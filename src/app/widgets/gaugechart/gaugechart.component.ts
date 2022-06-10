import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-gaugechart',
  templateUrl: './gaugechart.component.html',
  styleUrls: ['./gaugechart.component.css']
})
export class GaugechartComponent   implements OnInit{

  view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition: string = 'below';
 constructor(private service:DashboardService)
 {

 }
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
single = [
    {
      "name": "Germany",
      "value": 8940000
    },
   
  ];
  chart: any=[];
  salesData: any = null;
  ngxchartdata: any;

  ngOnInit(): void {
    this.getDataForChart();

  }
  getDataForChart(){
    this.service.getDataForGaugeChart().subscribe(data =>
     {
    this.chart=data;
     debugger;
     this.ngxchartdata = data;
     this.ngxchartdata = [...this.ngxchartdata];
     });

    }
}
