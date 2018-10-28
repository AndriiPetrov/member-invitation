import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingMembersComponent } from './pending-members.component';

describe('PendingMembersComponent', () => {
  let component: PendingMembersComponent;
  let fixture: ComponentFixture<PendingMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
