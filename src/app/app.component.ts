// import { Component, ViewChild, ElementRef } from '@angular/core';
import { Member } from './shared/member.model';
import { ChildComponent } from './child-component';


import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
// import {User} from './user';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
// import { NgModel, FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

import {FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

// export class Phone {
//   constructor(public title: string,
//               public price: number,
//               public company: string) {}
// }

export class User {
  name: string;
  email: string;
  phoen: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // myForm: FormGroup;
  //   constructor(private formBuilder: FormBuilder) {

  //       this.myForm = formBuilder.group({

  //           'userName': ['Tom', [Validators.required]],
  //           'userEmail': ['', [ Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
  //           'phones': formBuilder.array([
  //               ['+7', Validators.required]
  //           ])
  //       });
  //   }
  //   addPhone() {
  //       (<FormArray>this.myForm.controls['phones']).push(new FormControl('+7', Validators.required));
  //   }
  //   submit() {
  //       console.log(this.myForm);
  //   }
  // submit(form: NgForm) {
  //   console.log(form);
  // }
  // title = 'member-invitations';
  // members: Member[];
  // name: string = "Andrew";

  // @ViewChild("nameText")
  // nameParagraph: ElementRef;

  // name: string = "Mario";

  // items: ['Apple Iphone Xxs', 'Huawei Mate Pro 20', 'Samsung Galaxy S10', 'Motorola Moto Z'];

  // phones: Phone[] = [];
  // companies: string[] = ['Apple', 'Huawei', 'Xiaomi', 'Samsung', 'LG', 'Motorola', 'Alcatel'];

  // addPhone(title: string, price: number, company: string) {
  //   this.phones.push(new Phone(title, price, company));
  // }

  // phone: Phone = new Phone('', 0, 'Huawei');
  // phones: Phone[] = [];
  // companies: string[] = ['Apple', 'Huawei', 'Xiaomi', 'Samsung', 'LG', 'Motorola', 'Alcatel'];

  // addPhone() {
  //     this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
  //     // this.phones.push(this.phone);
  // }

  // phone: Phone = new Phone('', 0, 'Samsung');
  //   companies: string[] = ['Apple', 'Huawei', 'Xiaomi', 'Samsung', 'LG', 'Motorola', 'Alcatel'];

  //   addPhone(title: NgModel, price: NgModel, comp: NgModel) {
  //       console.log(title);
  //       console.log(price);
  //       console.log(comp);
  //   }

  //   onTitleChange() {
  //     if ( this.phone.title === 'no') {
  //       this.phone.title = 'unknown';
  //     }
  //   }
  // condition: boolean = true;
  //
  // toggle() {
  //   this.condition = !this.condition;
  // }

  // change() {
  //   console.log(this.nameParagraph.nativeElement.textContent);
  //   this.nameParagraph.nativeElement.textContent = "world";
  // }

  // constructor(); {
  //   // this.members = [
  //   // new Member("Bob", "Wilkinson", "BobWilk@gmail.com", 2, "20180204", "20180204", "Let's make a great world"),
  //   // new Member("Marta", "Stuard", "MartaStuard@gmail.com", 2, "20180504", "20180204", "Let's make a great world"),
  //   // new Member("Bill", "Daymond", "BillDay@gmail.com", 2, "20180406", "20180204", "Let's make a great world"),
  //   // ]
  // }

// }
  }
