import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullMembersComponent } from './full-members/full-members.component';
import { PendingMembersComponent } from './pending-members/pending-members.component';
import { DeactivatedMembersComponent } from './deactivated-members/deactivated-members.component';
import { InviteMemberComponent } from './invite-member/invite-member.component';
import {NavigationComponent} from './navigation/navigation.component';
import {SettingsComponent} from './settings/settings.component';
import {MembersComponent} from './members/members.component';
import {SubscriptionsComponent} from './subscriptions/subscriptions.component';
import {BillingComponent} from './billing/billing.component';
import { Guard } from './guard';
import { ExitGuard } from './exit.guard';

const memberRoutes: Routes = [
  { path: 'full-members', component: FullMembersComponent},
  { path: 'pending-members', component: PendingMembersComponent},
  { path: 'deactivated-members', component: DeactivatedMembersComponent}
];

const routes: Routes = [
  { path: '', component: NavigationComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'members',  component: MembersComponent},
  { path: 'members', component: MembersComponent, children: memberRoutes},
  // { path: "members/full-members/invite-member", component: InviteMemberComponent},
  { path: 'subscriptions', component: SubscriptionsComponent, canActivate: [Guard]},
  { path: 'billing', component: BillingComponent, canDeactivate: [ExitGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Guard, ExitGuard]
})
export class AppRoutingModule { }
