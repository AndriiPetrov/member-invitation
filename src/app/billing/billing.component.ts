import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '../exit.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements ComponentCanDeactivate {
  saved: boolean = false;

  save() {
    this.saved = true;
  }

  canDeactivate() : boolean | Observable<boolean> {
    if(!this.saved) {
      return confirm("Are you shoure you want to leave?");
    }
    else {
      return true;
    }
  }

}
