import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent  {
   // title = 'myHighchart';
   
   // data = [{
   //         name: 'ItSolutionStuff.com',
   //         data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
   //      },{
   //         name: 'Nicesnippets.com',
   //         data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
   //      }];
  
   // highcharts = Highcharts;
   // chartOptions = {   
   //   chart: {
   //      type: "spline"
   //   },
   //   title: {
   //      text: "Monthly Site Visitor"
   //   },
   //   xAxis:{
   //      categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   //   },
   //   yAxis: {          
   //      title:{
   //         text:"Visitors"
   //      } 
   //   },
   //   series: this.data
   // };
   customColors = (value) => {
    console.log(value);
    return "#66FF00";
  }
   options=[
    {name:'saleData',id:1},
    {name:'productData',id:2}
  ];
  currentSelection = {
    name:'saleData'
  };
   saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  productData = [
    { name: "dcdcds", value: 105000 },
    { name: "Acccc", value: 500 }
   
  ];
  name = 'Angular';
  selectedObject;
  textTypes = [
    { key : 'key' , value : 'value' },
    { key : 'key1' , value : 'value1' },
    { key : 'key2' , value : 'value2' },
    { key : 'key3' , value : 'value3' },
    { key : 'key4' , value : 'value4' },

  ]

  handleChange(index) {
    console.log(this.textTypes[index]);
    this.selectedObject = this.textTypes[index];
  }
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
    this.service.getDataForPieChart().subscribe(data =>
     {
    this.chart=data;
     debugger;
     this.ngxchartdata = data;
     this.ngxchartdata = [...this.ngxchartdata];
     });

    }

}
