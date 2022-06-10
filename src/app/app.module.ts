import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { RadarchartComponent } from './widgets/radarchart/radarchart.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './table/table.component';
import { DashboardService } from './services/dashboard.service';
 import { HttpClientModule } from '@angular/common/http';
import { TComponent } from './t/t.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PiechartComponent } from './widgets/piechart/piechart.component';
import 'chart.js';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { GaugechartComponent } from './widgets/gaugechart/gaugechart.component';
import { MinicardsComponent } from './widgets/minicards/minicards.component';
import { LinechartComponent } from './widgets/linechart/linechart.component';
import { DonutchartComponent } from './widgets/donutchart/donutchart.component';
import { NumbercardconsumeenergyComponent } from './widgets/numbercardconsumeenergy/numbercardconsumeenergy.component';
import { NumbercardyildtodayComponent } from './widgets/numbercardyildtoday/numbercardyildtoday.component';
import { NumbercardsavingsComponent } from './widgets/numbercardsavings/numbercardsavings.component';
import { NumbercardCO2Component } from './widgets/numbercard-co2/numbercard-co2.component';
import { LoginComponent } from './login/login.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    CardComponent,
    RadarchartComponent,
    TableComponent,
    TComponent,
    PiechartComponent,
    GaugechartComponent,
    MinicardsComponent,
    LinechartComponent,
    DonutchartComponent,
    NumbercardconsumeenergyComponent,
    NumbercardyildtodayComponent,
    NumbercardsavingsComponent,
    NumbercardCO2Component,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgChartsModule,
    AppRoutingModule,
    HighchartsChartModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    NgxChartsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
