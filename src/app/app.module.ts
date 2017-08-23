import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {
  MenubarModule,
  ButtonModule,
  ChartModule,
  TabViewModule
} from 'primeng/primeng';



import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { NavbarComponent } from './common/home/navbar/navbar.component';
import { GeneralComponent } from './common/dashboard/general/general.component';
import { DeliveryComponent } from './common/dashboard/delivery/delivery.component';
import { RegistrationComponent } from './common/dashboard/registration/registration.component';
import { OrdersComponent } from './common/dashboard/orders/orders.component';
import { GallonsComponent } from './common/dashboard/gallons/gallons.component';
import { FinancialComponent } from './common/dashboard/financial/financial.component';
import { OtherreportsComponent } from './common/dashboard/otherreports/otherreports.component';
import { ElistgoldComponent } from './common/dashboard/elistgold/elistgold.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    GeneralComponent,
    DeliveryComponent,
    RegistrationComponent,
    OrdersComponent,
    GallonsComponent,
    FinancialComponent,
    OtherreportsComponent,
    ElistgoldComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ButtonModule,
    ChartModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
