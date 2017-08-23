import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Order Processing',
      items: [{
        label: 'Manage New Order'
      }, {
        label: 'Manage Received Order'
      }, {
        label: 'Order Cancellation'
      }, {
        label: 'Manage Mispostings'
      }, {
        label: 'Manual Posting of Order'
      }, {
        label: 'Manage Delivered Order'
      }, {
        label: 'Regenerate Order Emails'
      }]
  },{
      label: 'Settings',
      items: [{
        label: 'Setup Delivery Day'
      }, {
        label: 'Setup Delivery Alert'
      }, {
        label: 'Setup Client Rules'
      }, {
        label: 'Setup Client Product Rules'
      }, {
        label: 'Accepted Payment Option'
      }, {
        label: 'Manage Content'
      }, {
        label: 'Setup Tank Size Specs'
      }, {
        label: 'Hint Question'
      }, {
        label: 'Setup Credit'
      }, {
        label: 'Client Newsletter Options'
      }, {
        label: 'Setup Upsell Product'
      }, {
        label: 'Manage Product'
      }, {
        label: 'Behavioral Targeting'
      }, {
        label: 'Google Analytic Details'
      }, {
        label: 'Manage Source'
      }, {
        label: 'Google Analytic Targets'
      }, {
        label: 'KPI Benchmark(beta'
      }, {
        label: 'Facebook Appid'
      }, {
        label: 'Setup Highlight Option'
      }],
    }, {
      label: 'Pricing',
      items: [{
        label: 'Pricing Region Maintenance'
      }, {
        label: 'Price Maintenance'
      }, {
        label: 'Setup Tax'
      }, {
        label: 'Edit Tax'
      }]
    }, {
      label: 'Manage Account',
      items: [{
        label: 'Register Customer'
      }, {
        label: 'Credit On Account Assign'
      }, {
        label: 'Credit On Account UnAssign'
      }, {
        label: 'CSR/Dealer User Setup'
      }, {
        label: 'Search CSR/Dealer'
      }]
    }, {
      label: 'Manage Promotions',
      items: [{
        label: 'Add Promotions'
      }, {
        label: 'Edit/Manage Promotions'
      }, {
        label: 'Add/Remove Promo on Order'
      }]
    }, {
      label: 'Help',
      items: [{
        label: 'Change Password'
      },{
        label: 'Help Desk'
      }, {
        label: 'How To'
      }, {
        label: 'Enhancements -Sell More'
      }, {
        label: 'Enhancements -Engine Easy'
      },{
        label: 'Terms'
      }]
    }]
  }
}
