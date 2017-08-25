import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import { MnewordersComponent } from './common/processing/mneworders/mneworders.component';
import { MreceivedorderComponent } from './common/processing/mreceivedorder/mreceivedorder.component';
import { OrdercancellationComponent } from './common/processing/ordercancellation/ordercancellation.component';
import { MmispostingsComponent } from './common/processing/mmispostings/mmispostings.component';
import { MpostingorderComponent } from './common/processing/mpostingorder/mpostingorder.component';
import { MdeveliveredorderComponent } from './common/processing/mdeveliveredorder/mdeveliveredorder.component';
import { RorderemailsComponent } from './common/processing/rorderemails/rorderemails.component';

import { SdeliverydayComponent } from './common/settings/sdeliveryday/sdeliveryday.component';
import { SdeliveryalertComponent } from './common/settings/sdeliveryalert/sdeliveryalert.component';
import { SclientrulesComponent } from './common/settings/sclientrules/sclientrules.component';
import { SclientprodrulesComponent } from './common/settings/sclientprodrules/sclientprodrules.component';
import { AcceptpmntoptionComponent } from './common/settings/acceptpmntoption/acceptpmntoption.component';
import { McontentComponent } from './common/settings/mcontent/mcontent.component';
import { StanksizespecComponent } from './common/settings/stanksizespec/stanksizespec.component';
import { HintquestionComponent } from './common/settings/hintquestion/hintquestion.component';
import { ScreditComponent } from './common/settings/scredit/scredit.component';
import { ClientnewsletteroptComponent } from './common/settings/clientnewsletteropt/clientnewsletteropt.component';
import { SupsellprodComponent } from './common/settings/supsellprod/supsellprod.component';
import { MproductComponent } from './common/settings/mproduct/mproduct.component';
import { BtargetingComponent } from './common/settings/btargeting/btargeting.component';
import { GoogleanalyticdetComponent } from './common/settings/googleanalyticdet/googleanalyticdet.component';
import { KpibenchComponent } from './common/settings/kpibench/kpibench.component';
import { GoogleanalytictargetComponent } from './common/settings/googleanalytictarget/googleanalytictarget.component';
import { MsourceComponent } from './common/settings/msource/msource.component';
import { FbappidComponent } from './common/settings/fbappid/fbappid.component';
import { ShighlightoptComponent } from './common/settings/shighlightopt/shighlightopt.component';

import { PregionmaintComponent } from './common/pricing/pregionmaint/pregionmaint.component';
import { PmaintenanceComponent } from './common/pricing/pmaintenance/pmaintenance.component';
import { StaxComponent } from './common/pricing/stax/stax.component';
import { EtaxComponent } from './common/pricing/etax/etax.component';

import { FaccountComponent } from './common/mngaccount/faccount/faccount.component';
import { RcustomerComponent } from './common/mngaccount/rcustomer/rcustomer.component';
import { CoaccassignComponent } from './common/mngaccount/coaccassign/coaccassign.component';
import { CoaccunassignComponent } from './common/mngaccount/coaccunassign/coaccunassign.component';
import { CsrdealerusersetComponent } from './common/mngaccount/csrdealeruserset/csrdealeruserset.component';
import { CsrdealersearchComponent } from './common/mngaccount/csrdealersearch/csrdealersearch.component';

import { AddpromoComponent } from './common/promotions/addpromo/addpromo.component';
import { MpromoComponent } from './common/promotions/mpromo/mpromo.component';
import { MpromoonorderComponent } from './common/promotions/mpromoonorder/mpromoonorder.component';

import { HdeskComponent } from './common/help/hdesk/hdesk.component';
import { HowtoComponent } from './common/help/howto/howto.component';
import { EnhsellmoreComponent } from './common/help/enhsellmore/enhsellmore.component';
import { EnhengineezComponent } from './common/help/enhengineez/enhengineez.component';
import { ChnpasswordComponent } from './common/help/chnpassword/chnpassword.component';
import { TermsComponent } from './common/help/terms/terms.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

import {AuthService} from "./auth/auth.service";

import {
  MenubarModule,
  ButtonModule,
  ChartModule,
  TabViewModule,
  PasswordModule, AccordionModule
} from 'primeng/primeng';
import {FormsModule} from "@angular/forms";
import {AuthGuardService} from "./auth/auth-guard.service";



const appRoutes: Routes = [
  {path: '', canActivate: [AuthGuardService], component: DashboardComponent},

  {path: 'mneworder', canActivate: [AuthGuardService], component: MnewordersComponent},
  {path: 'mreceivedorder', canActivate: [AuthGuardService], component: MreceivedorderComponent},
  {path: 'ordercancellation', canActivate: [AuthGuardService], component: OrdercancellationComponent},
  {path: 'mmisposting', canActivate: [AuthGuardService], component: MmispostingsComponent},
  {path: 'mpostingorder', canActivate: [AuthGuardService], component: MpostingorderComponent},
  {path: 'mdeliveredorder', canActivate: [AuthGuardService], component: MdeveliveredorderComponent},
  {path: 'rorderemails', canActivate: [AuthGuardService], component: RorderemailsComponent},

  {path: 'sdeliveryday', canActivate: [AuthGuardService], component: SdeliverydayComponent},
  {path: 'sdeliveryalert', canActivate: [AuthGuardService], component: SdeliveryalertComponent},
  {path: 'sclientrules', canActivate: [AuthGuardService], component: SclientrulesComponent},
  {path: 'sclientprodrules', canActivate: [AuthGuardService], component: SclientprodrulesComponent},
  {path: 'accpmntopt', canActivate: [AuthGuardService], component: AcceptpmntoptionComponent},
  {path: 'mcontent', canActivate: [AuthGuardService], component: McontentComponent},
  {path: 'stanksizespc', canActivate: [AuthGuardService], component: StanksizespecComponent},
  {path: 'hquestion', canActivate: [AuthGuardService], component: HintquestionComponent},
  {path: 'scredit', canActivate: [AuthGuardService], component: ScreditComponent},
  {path: 'cnewsletteropt', canActivate: [AuthGuardService], component: ClientnewsletteroptComponent},
  {path: 'supsellprod', canActivate: [AuthGuardService], component: SupsellprodComponent},
  {path: 'mproduct', canActivate: [AuthGuardService], component: MproductComponent},
  {path: 'btargeting', canActivate: [AuthGuardService], component: BtargetingComponent},
  {path: 'googleandet', canActivate: [AuthGuardService], component: GoogleanalyticdetComponent},
  {path: 'msource', canActivate: [AuthGuardService], component: MsourceComponent},
  {path: 'googleantarg', canActivate: [AuthGuardService], component: GoogleanalytictargetComponent},
  {path: 'kpibench', canActivate: [AuthGuardService], component: KpibenchComponent},
  {path: 'fbapp', canActivate: [AuthGuardService], component: FbappidComponent},
  {path: 'shighlightopt', canActivate: [AuthGuardService], component: ShighlightoptComponent},

  {path: 'pregionmaint', canActivate: [AuthGuardService], component: PregionmaintComponent},
  {path: 'pmaintenance', canActivate: [AuthGuardService], component: PmaintenanceComponent},
  {path: 'stax', canActivate: [AuthGuardService], component: StaxComponent},
  {path: 'etax', canActivate: [AuthGuardService], component: EtaxComponent},

  {path: 'faccount', canActivate: [AuthGuardService], component: FaccountComponent},
  {path: 'rcustomer', canActivate: [AuthGuardService], component: RcustomerComponent},
  {path: 'coaa', canActivate: [AuthGuardService], component: CoaccassignComponent},
  {path: 'coau', canActivate: [AuthGuardService], component: CoaccunassignComponent},
  {path: 'csrdealer', canActivate: [AuthGuardService], component: CsrdealerusersetComponent},
  {path: 'csrsearch', canActivate: [AuthGuardService], component: CsrdealersearchComponent},

  {path: 'addpromo', canActivate: [AuthGuardService], component: AddpromoComponent},
  {path: 'mpromo', canActivate: [AuthGuardService], component: MpromoComponent},
  {path: 'mpromoorder', canActivate: [AuthGuardService], component: MpromoonorderComponent},

  {path: 'hdesk', canActivate: [AuthGuardService], component: CsrdealersearchComponent},
  {path: 'howto', canActivate: [AuthGuardService], component: CsrdealersearchComponent},
  {path: 'enhsellmore', canActivate: [AuthGuardService], component: CsrdealersearchComponent},
  {path: 'enhengineez', canActivate: [AuthGuardService], component: CsrdealersearchComponent},
  {path: 'chgpwd', canActivate: [AuthGuardService], component: CsrdealersearchComponent},
  {path: 'terms', canActivate: [AuthGuardService], component: CsrdealersearchComponent},

  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent}

];

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
    ElistgoldComponent,
    MnewordersComponent,
    MreceivedorderComponent,
    OrdercancellationComponent,
    MmispostingsComponent,
    MpostingorderComponent,
    MdeveliveredorderComponent,
    RorderemailsComponent,
    SdeliverydayComponent,
    SdeliveryalertComponent,
    SclientrulesComponent,
    SclientprodrulesComponent,
    AcceptpmntoptionComponent,
    McontentComponent,
    StanksizespecComponent,
    HintquestionComponent,
    ScreditComponent,
    ClientnewsletteroptComponent,
    SupsellprodComponent,
    MproductComponent,
    BtargetingComponent,
    GoogleanalyticdetComponent,
    KpibenchComponent,
    GoogleanalytictargetComponent,
    MsourceComponent,
    FbappidComponent,
    ShighlightoptComponent,
    PregionmaintComponent,
    PmaintenanceComponent,
    StaxComponent,
    EtaxComponent,
    FaccountComponent,
    RcustomerComponent,
    CoaccassignComponent,
    CoaccunassignComponent,
    CsrdealerusersetComponent,
    CsrdealersearchComponent,
    AddpromoComponent,
    MpromoComponent,
    MpromoonorderComponent,
    HdeskComponent,
    HowtoComponent,
    EnhsellmoreComponent,
    EnhengineezComponent,
    ChnpasswordComponent,
    TermsComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    ChartModule,
    TabViewModule,
    PasswordModule,
    AccordionModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
