import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipItemComponent } from './membership-item.component';

describe('MembershipItemComponent', () => {
  let component: MembershipItemComponent;
  let fixture: ComponentFixture<MembershipItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
