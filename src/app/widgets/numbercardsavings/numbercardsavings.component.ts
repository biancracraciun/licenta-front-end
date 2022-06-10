import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-numbercardsavings',
  templateUrl: './numbercardsavings.component.html',
  styleUrls: ['./numbercardsavings.component.css']
})
export class NumbercardsavingsComponent implements OnInit {

  constructor(private service:DashboardService)
  {
 
  }
  customColors = (value) => {
    console.log(value);
    return "#FFFF00";
  }

  cardColor: string = '#FFFFFF';

  chart: any=[];
  salesData: any = null;
  ngxchartdata: any;

  ngOnInit(): void {
    this.getDataForChart();

  }
  getDataForChart(){
    this.service.getDataForNumberSavingsCard().subscribe(data =>
     {
    this.chart=data;
     debugger;
     this.ngxchartdata = data;
     this.ngxchartdata = [...this.ngxchartdata];
     });

    }
}
