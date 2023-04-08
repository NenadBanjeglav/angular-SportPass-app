import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ContactComponent } from './core/contact/contact.component';
import { PacketsComponent } from './packets/packets.component';
import { RegistrationComponent } from './registration/registration.component';
import { BuyMembershipComponent } from './buy-membership/buy-membership.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PacketItemComponent } from './packets/packet-item/packet-item.component';
import { BuySpecificComponent } from './buy-specific/buy-specific.component';
import { MembershipItemComponent } from './my-account/membership-item/membership-item.component';
import { ProgressBarComponent } from './my-account/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    PacketsComponent,
    RegistrationComponent,
    BuyMembershipComponent,
    MyAccountComponent,
    PacketItemComponent,
    BuySpecificComponent,
    MembershipItemComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
