import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent implements OnInit {

  view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition: string = 'below';
 constructor(private service:DashboardService)
 {

 }

 visbileData = false;
  customColors = (value) => {

    return "#66FF00";
  }

  series = [
    {
      "name": "Retired",
      "value": 20
    },
    {
      "name": "Employed",
      "value": 70
    },
    {
      "name": "Unemployed",
      "value": 10
    }
  ];

  chart: any=[];
  salesData: any = null;
  ngxchartdata: any;

  ngOnInit(): void {
    this.getDataForChart();
    debugger;
    let currnetUser = localStorage.getItem('CurrentUser');
    this.visbileData = localStorage.getItem('currnetUser') === 'true';
  }
  getDataForChart(){
    this.service.getDataForPieChart().subscribe(data =>
     {
    this.chart=data;
     debugger;
     this.ngxchartdata = data;
     if(this.visbileData == true)
     {
      this.ngxchartdata = [...this.ngxchartdata];
     }
    
     });

    }

}
