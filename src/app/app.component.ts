// import { Component, ViewChild, ElementRef } from '@angular/core';
import { Member } from './shared/member.model';
import { ChildComponent } from './child-component';


import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

export class Phone {
  constructor(public title: string,
              public price: number,
              public company: string) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedUser: User;
  users: Array<User>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private serv: UserService) {
      this.users = new Array<User>();
  }

  ngOnInit() {
      this.loadUsers();
  }

  // загрузка пользователей
  private loadUsers() {
      this.serv.getUsers().subscribe((data: User[]) => {
              this.users = data;
          });
  }
  // добавление пользователя
  addUser() {
      this.editedUser = new User(0, '', 0);
      this.users.push(this.editedUser);
      this.isNewRecord = true;
  }

  // редактирование пользователя
  editUser(user: User) {
      this.editedUser = new User(user.Id, user.Name, user.Age);
  }
  // загружаем один из двух шаблонов
  loadTemplate(user: User) {
      if (this.editedUser && this.editedUser.Id === user.Id) {
          return this.editTemplate;
      } else {
          return this.readOnlyTemplate;
      }
  }
  // сохраняем пользователя
  saveUser() {
      if (this.isNewRecord) {
          // добавляем пользователя
          this.serv.createUser(this.editedUser).subscribe(data => {
              this.statusMessage = 'Данные успешно добавлены',
              this.loadUsers();
          });
          this.isNewRecord = false;
          this.editedUser = null;
      } else {
          // изменяем пользователя
          this.serv.updateUser(this.editedUser.Id, this.editedUser).subscribe(data => {
              this.statusMessage = 'Данные успешно обновлены',
              this.loadUsers();
          });
          this.editedUser = null;
      }
  }
    // отмена редактирования
    cancel() {
        // если отмена при добавлении, удаляем последнюю запись
        if (this.isNewRecord) {
            this.users.pop();
            this.isNewRecord = false;
        }
        this.editedUser = null;
    }
    // удаление пользователя
    deleteUser(user: User) {
        this.serv.deleteUser(user.Id).subscribe(data => {
            this.statusMessage = 'Данные успешно удалены',
            this.loadUsers();
        });
    }
}
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
