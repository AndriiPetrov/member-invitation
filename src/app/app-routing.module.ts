import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullMembersComponent } from './full-members/full-members.component';
import { PendingMembersComponent } from './pending-members/pending-members.component';
import { DeactivatedMembersComponent } from './deactivated-members/deactivated-members.component';
import { InviteMemberComponent } from './invite-member/invite-member.component';
import {NavigationComponent} from "./navigation/navigation.component";
import {SettingsComponent} from "./settings/settings.component";
import {MembersComponent} from "./members/members.component";
import {SubscriptionsComponent} from "./subscriptions/subscriptions.component";
import {BillingComponent} from "./billing/billing.component";

const routes: Routes = [
  { path: "", component: NavigationComponent},
  { path: "settings", component: SettingsComponent},
  { path: "members",  component: MembersComponent},
  { path: "members/full-members", component: FullMembersComponent},
  { path: "members/full-members/invite-member", component: InviteMemberComponent},
  { path: "members/pending-members", component: PendingMembersComponent},
  { path: "members/deactivated-members", component: DeactivatedMembersComponent},
  { path: "subscriptions", component: SubscriptionsComponent},
  { path: "billing", component: BillingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
