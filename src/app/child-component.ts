import { Component, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<ng-content></ng-content>
             <button (click)="change()">Change</button>`
})
export class ChildComponent {

  @ContentChild("headerContent")
  header: ElementRef;

  change() {
    console.log(this.header);
    this.header.nativeElement.textContent =  "Hello to World!"
  }
  // counter: number = 0;
  // increment() { this.counter++; }
  // decrement() { this.counter--; }

}

