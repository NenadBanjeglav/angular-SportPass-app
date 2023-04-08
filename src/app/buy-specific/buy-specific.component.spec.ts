import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySpecificComponent } from './buy-specific.component';

describe('BuySpecificComponent', () => {
  let component: BuySpecificComponent;
  let fixture: ComponentFixture<BuySpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuySpecificComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuySpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
