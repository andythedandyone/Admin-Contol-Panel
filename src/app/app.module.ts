import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {MenubarModule, ButtonModule} from 'primeng/primeng';



import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { NavbarComponent } from './common/home/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
