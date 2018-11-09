import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullMembersComponent } from './full-members/full-members.component';
import { PendingMembersComponent } from './pending-members/pending-members.component';
import { DeactivatedMembersComponent } from './deactivated-members/deactivated-members.component';
import { MembersService } from './shared/members.service';
import { SettingsComponent } from './settings/settings.component';
import { MembersComponent } from './members/members.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { BillingComponent } from './billing/billing.component';
import { InviteMemberComponent } from './invite-member/invite-member.component';
import { NavigationComponent } from './navigation/navigation.component';
import {ChildComponent} from './child-component';
import {BoldDirective} from './bold.directive';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FullMembersComponent,
    PendingMembersComponent,
    DeactivatedMembersComponent,
    SettingsComponent,
    MembersComponent,
    SubscriptionsComponent,
    BillingComponent,
    InviteMemberComponent,
    NavigationComponent,
    ChildComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
