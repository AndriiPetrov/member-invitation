import { Component, ViewChild, ElementRef } from '@angular/core';
import { Member } from './shared/member.model';
import { ChildComponent } from './child-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'member-invitations';
  // members: Member[];
  // name: string = "Andrew";

  // @ViewChild("nameText")
  // nameParagraph: ElementRef;

  name: string = "Mario";

  // change() {
  //   console.log(this.nameParagraph.nativeElement.textContent);
  //   this.nameParagraph.nativeElement.textContent = "world";
  // }

  constructor() {
    // this.members = [
    // new Member("Bob", "Wilkinson", "BobWilk@gmail.com", 2, "20180204", "20180204", "Let's make a great world"),
    // new Member("Marta", "Stuard", "MartaStuard@gmail.com", 2, "20180504", "20180204", "Let's make a great world"),
    // new Member("Bill", "Daymond", "BillDay@gmail.com", 2, "20180406", "20180204", "Let's make a great world"),
    // ]
  }

}
