import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.items = [{
      label: 'Dashboard',
      routerLink: '/'
    },{
      label: 'Order Processing',
      items: [{
        label: 'Manage New Order',
        routerLink: 'mneworder'
      }, {
        label: 'Manage Received Order',
        routerLink: 'mreceivedorder'
      }, {
        label: 'Order Cancellation',
        routerLink: 'ordercancellation'
      }, {
        label: 'Manage Mispostings',
        routerLink: 'mmisposting'
      }, {
        label: 'Manual Posting of Order',
        routerLink: 'mpostingorder'
      }, {
        label: 'Manage Delivered Order',
        routerLink: 'mdeliveredorder'
      }, {
        label: 'Regenerate Order Emails',
        routerLink: 'rorderemails'
      }]
  },{
      label: 'Settings',
      items: [{
        label: 'Setup Delivery Day',
        routerLink: 'sdeliveryday'
      }, {
        label: 'Setup Delivery Alert',
        routerLink: 'sdeliveryalert'
      }, {
        label: 'Setup Client Rules',
        routerLink: 'sclientrules'
      }, {
        label: 'Setup Client Product Rules',
        routerLink: 'sclientprodrules'
      }, {
        label: 'Accepted Payment Option',
        routerLink: 'accpmntopt'
      }, {
        label: 'Manage Content',
        routerLink: 'mcontent'
      }, {
        label: 'Setup Tank Size Specs',
        routerLink: 'stanksizespc'
      }, {
        label: 'Hint Question',
        routerLink: 'hquestion'
      }, {
        label: 'Setup Credit',
        routerLink: 'scredit'
      }, {
        label: 'Client Newsletter Options',
        routerLink: 'cnewsletteropt'
      }, {
        label: 'Setup Upsell Product',
        routerLink: 'supsellprod'
      }, {
        label: 'Manage Product',
        routerLink: 'mproduct'
      }, {
        label: 'Behavioral Targeting',
        routerLink: 'btargeting'
      }, {
        label: 'Google Analytic Details',
        routerLink: 'googleandet'
      }, {
        label: 'Manage Source',
        routerLink: 'msource'
      }, {
        label: 'Google Analytic Targets',
        routerLink: 'googleantarg'
      }, {
        label: 'KPI Benchmark(beta',
        routerLink: 'kpibench'
      }, {
        label: 'Facebook Appid',
        routerLink: 'fbapp'
      }, {
        label: 'Setup Highlight Option',
        routerLink: 'shighlightopt'
      }],
    }, {
      label: 'Pricing',
      items: [{
        label: 'Pricing Region Maintenance',
        routerLink: 'pregionmaint'
      }, {
        label: 'Price Maintenance',
        routerLink: 'pmaintenance'
      }, {
        label: 'Setup Tax',
        routerLink: 'stax'
      }, {
        label: 'Edit Tax',
        routerLink: 'etax'
      }]
    }, {
      label: 'Manage Account',
      items: [{
        label: 'Find Account',
        routerLink: 'faccount'
      },{
        label: 'Register Customer',
        routerLink: 'rcustomer'
      }, {
        label: 'Credit On Account Assign',
        routerLink: 'coaa'
      }, {
        label: 'Credit On Account UnAssign',
        routerLink: 'coau'
      }, {
        label: 'CSR/Dealer User Setup',
        routerLink: 'csrdealer'
      }, {
        label: 'Search CSR/Dealer',
        routerLink: 'csrsearch'
      }]
    }, {
      label: 'Manage Promotions',
      items: [{
        label: 'Add Promotions',
        routerLink: 'addpromo'
      }, {
        label: 'Edit/Manage Promotions',
        routerLink: 'mpromo'
      }, {
        label: 'Add/Remove Promo on Order',
        routerLink: 'mpromoorder'
      }]
    }, {
      label: 'Help',
      items: [{
        label: 'Change Password',
        routerLink: 'chgpwd'
      },{
        label: 'Help Desk',
        routerLink: 'hdesk'
      }, {
        label: 'How To',
        routerLink: 'howto'
      }, {
        label: 'Enhancements -Sell More',
        routerLink: 'enhsellmore'
      }, {
        label: 'Enhancements -Engine Easy',
        routerLink: 'enhengineez'
      },{
        label: 'Terms',
        routerLink: 'terms'
      }]
    }]
  }

  onClickLogout() {
    this.authService.logoutUser()
  }
}
