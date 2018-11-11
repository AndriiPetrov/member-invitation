import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.componentInstance.id = 10; // should be the id

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
