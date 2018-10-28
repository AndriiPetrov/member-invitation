import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMembersComponent } from './full-members.component';

describe('FullMembersComponent', () => {
  let component: FullMembersComponent;
  let fixture: ComponentFixture<FullMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
