import { Component, OnInit, Input } from '@angular/core';
// import { Member } from '../shared/member.model';
import { MembersService } from '../shared/members.service';
import { Member } from '../shared/member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-members',
  templateUrl: './full-members.component.html',
  styleUrls: ['./full-members.component.css']
})
export class FullMembersComponent implements OnInit {
  members: Member[]
  
  constructor(private service: MembersService, private router: Router) { 

  }

  ngOnInit() {
    this.members = this.service.data;
  }

  onInvite() {
    this.router.navigate(["full-members", "invite-member"])
  }

}
