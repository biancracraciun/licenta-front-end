import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartDisplayModelFeedInEnergy } from '../models/ChartDisplayModelFeedInEnergy';
import { ChartDisplayModelHourly } from '../models/ChartDisplayModelHourly';
import { ChartModel } from '../models/ChartModel';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly APIurl="http://localhost:45428/api";
  constructor(private http:HttpClient) { }
  getTableList():Observable<any[]>
{
  return this.http.get<any>(this.APIurl+'/solax/GetStoredData');
}
getDataChart():Observable<any[]>
{
  return this.http.get<any>(this.APIurl+'/solax/GetStoredDataChart');
}
 getDataForLineChart():Observable<ChartDisplayModelHourly[]>
 {
   return this.http.get<ChartDisplayModelHourly[]>(this.APIurl+'/solax/GetStoredDataLineChart')
   
 }
 getDataForGaugeChart():Observable<ChartDisplayModelFeedInEnergy[]>
 {
   return this.http.get<ChartDisplayModelFeedInEnergy[]>(this.APIurl+'/solax/GetStoredDataGaugeChart')
   
 }
 getDataForRadarChart():Observable<ChartDisplayModelFeedInEnergy[]>
 {
   return this.http.get<ChartDisplayModelFeedInEnergy[]>(this.APIurl+'/solax/GetStoredDataRadarChart')
   
 }
 getDataForNumberCard():Observable<ChartModel[]>
 {
   return this.http.get<ChartModel[]>(this.APIurl+'/solax/GetStoredDataNumberCard')
   
 }
 getDataForNumberYieldTodayCard():Observable<ChartModel[]>
 {
   return this.http.get<ChartModel[]>(this.APIurl+'/solax/GetStoredDataNumberYieldTodayCard')
   
 }
 getDataForNumberSavingsCard():Observable<ChartModel[]>
 {
   return this.http.get<ChartModel[]>(this.APIurl+'/solax/GetStoredDataNumberSavingsCard')
   
 }
 getDataForNumberCO2Card():Observable<ChartModel[]>
 {
   return this.http.get<ChartModel[]>(this.APIurl+'/solax/GetStoredDataNumberEmisiiCard')
   
 }

  getDataForPieChart():Observable<ChartModel[]>
 {
   return this.http.get<ChartModel[]>(this.APIurl+'/solax/GetStoredDataPieChart')
   
 }
}
