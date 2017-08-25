import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
  PasswordModule
} from 'primeng/primeng';
import {FormsModule} from "@angular/forms";
import {AuthGuardService} from "./auth/auth-guard.service";



const appRoutes: Routes = [
  {path: '', component: DashboardComponent},

  {path: 'mneworder', component: MnewordersComponent},
  {path: 'mreceivedorder', component: MreceivedorderComponent},
  {path: 'ordercancellation', component: OrdercancellationComponent},
  {path: 'mmisposting', component: MmispostingsComponent},
  {path: 'mpostingorder', component: MpostingorderComponent},
  {path: 'mdeliveredorder', component: MdeveliveredorderComponent},
  {path: 'rorderemails', component: RorderemailsComponent},

  {path: 'sdeliveryday', component: SdeliverydayComponent},
  {path: 'sdeliveryalert', component: SdeliveryalertComponent},
  {path: 'sclientrules', component: SclientrulesComponent},
  {path: 'sclientprodrules', component: SclientprodrulesComponent},
  {path: 'accpmntopt', component: AcceptpmntoptionComponent},
  {path: 'mcontent', component: McontentComponent},
  {path: 'stanksizespc', component: StanksizespecComponent},
  {path: 'hquestion', component: HintquestionComponent},
  {path: 'scredit', component: ScreditComponent},
  {path: 'cnewsletteropt', component: ClientnewsletteroptComponent},
  {path: 'supsellprod', component: SupsellprodComponent},
  {path: 'mproduct', component: MproductComponent},
  {path: 'btargeting', component: BtargetingComponent},
  {path: 'googleandet', component: GoogleanalyticdetComponent},
  {path: 'msource', component: MsourceComponent},
  {path: 'googleantarg', component: GoogleanalytictargetComponent},
  {path: 'kpibench', component: KpibenchComponent},
  {path: 'fbapp', component: FbappidComponent},
  {path: 'shighlightopt', component: ShighlightoptComponent},

  {path: 'pregionmaint', component: PregionmaintComponent},
  {path: 'pmaintenance', component: PmaintenanceComponent},
  {path: 'stax', component: StaxComponent},
  {path: 'etax', component: EtaxComponent},

  {path: 'faccount', component: FaccountComponent},
  {path: 'rcustomer', component: RcustomerComponent},
  {path: 'coaa', component: CoaccassignComponent},
  {path: 'coau', component: CoaccunassignComponent},
  {path: 'csrdealer', component: CsrdealerusersetComponent},
  {path: 'csrsearch', component: CsrdealersearchComponent},

  {path: 'addpromo', component: AddpromoComponent},
  {path: 'mpromo', component: MpromoComponent},
  {path: 'mpromoorder', component: MpromoonorderComponent},

  {path: 'hdesk', component: CsrdealersearchComponent},
  {path: 'howto', component: CsrdealersearchComponent},
  {path: 'enhsellmore', component: CsrdealersearchComponent},
  {path: 'enhengineez', component: CsrdealersearchComponent},
  {path: 'chgpwd', component: CsrdealersearchComponent},
  {path: 'terms', component: CsrdealersearchComponent},

  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
