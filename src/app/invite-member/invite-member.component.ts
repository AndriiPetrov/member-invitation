import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from '../shared/members.service';
import { Member } from "../shared/member.model";

@Component({
  selector: 'app-invite-member',
  templateUrl: './invite-member.component.html',
  styleUrls: ['./invite-member.component.css']
})
export class InviteMemberComponent implements OnInit {
  members = this.service.data;

  constructor(private currentRoute: ActivatedRoute, public service: MembersService) { }

  ngOnInit() {
  }

  addMember(firstName: HTMLInputElement,
            lastName: HTMLInputElement,
            eMail: HTMLInputElement,
            noLeanCaseProject: HTMLInputElement,
            dateStatusChange: HTMLInputElement,
            dateLastLogin: HTMLInputElement,
            Action: HTMLInputElement): boolean {
    this.members.push( new Member(
      firstName.value,
      lastName.value,
      eMail.value,
      noLeanCaseProject.value,
      dateStatusChange.value,
      dateLastLogin.value,
      Action.value
      ));
    firstName.value = '';
    lastName.value = '';
    eMail.value = '';

      return false;
  }
}
