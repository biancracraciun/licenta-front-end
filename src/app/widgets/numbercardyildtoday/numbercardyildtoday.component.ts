import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-numbercardyildtoday',
  templateUrl: './numbercardyildtoday.component.html',
  styleUrls: ['./numbercardyildtoday.component.css']
})
export class NumbercardyildtodayComponent implements OnInit {

  constructor(private service:DashboardService)
  {
 
  }
  customColors = (value) => {
    console.log(value);
    return "#66FF66";
  }

  cardColor: string = '#FFFFFF';

single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    }
  ];
  chart: any=[];
  salesData: any = null;
  ngxchartdata: any;

  ngOnInit(): void {
    this.getDataForChart();

  }
  getDataForChart(){
    this.service.getDataForNumberYieldTodayCard().subscribe(data =>
     {
    this.chart=data;
     debugger;
     this.ngxchartdata = data;
     this.ngxchartdata = [...this.ngxchartdata];
     });

    }

}
