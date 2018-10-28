import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullMembersComponent } from './full-members/full-members.component';
import { PendingMembersComponent } from './pending-members/pending-members.component';
import { DeactivatedMembersComponent } from './deactivated-members/deactivated-members.component';
import { MembersService } from './shared/members.service';

@NgModule({
  declarations: [
    AppComponent,
    FullMembersComponent,
    PendingMembersComponent,
    DeactivatedMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
