import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyMembershipComponent } from './buy-membership/buy-membership.component';
import { BuySpecificComponent } from './buy-specific/buy-specific.component';
import { ContactComponent } from './core/contact/contact.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { PacketsComponent } from './packets/packets.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'packets', component: PacketsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'buy', component: BuyMembershipComponent},
  {path: 'buy/:id', component: BuySpecificComponent},
  {path: 'account', component: MyAccountComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'packets', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
