import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivatedMembersComponent } from './deactivated-members.component';

describe('DeactivatedMembersComponent', () => {
  let component: DeactivatedMembersComponent;
  let fixture: ComponentFixture<DeactivatedMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivatedMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivatedMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
