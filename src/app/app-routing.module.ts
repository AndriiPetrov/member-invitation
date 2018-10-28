import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullMembersComponent } from './full-members/full-members.component';
import { PendingMembersComponent } from './pending-members/pending-members.component';
import { DeactivatedMembersComponent } from './deactivated-members/deactivated-members.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "full-members"},
  { path: "full-members", component: FullMembersComponent},
  { path: "pending-members", component: PendingMembersComponent},
  { path: "deactivated-members", component: DeactivatedMembersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
