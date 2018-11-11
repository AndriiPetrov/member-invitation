import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MembersService } from '../shared/members.service';
import { Member } from '../shared/member.model';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html'
})
export class FormModalComponent {
  @Input() id: number;
  members = this.service.data;
  myForm: FormGroup;
  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder,
   public service: MembersService
  ) {
    this.createForm();
  }
  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  private submitForm() {
    this.activeModal.close(this.myForm.value);
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
