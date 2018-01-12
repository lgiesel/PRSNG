import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrReviewdetailComponent } from './pr-reviewdetail.component';

describe('PrReviewdetailComponent', () => {
  let component: PrReviewdetailComponent;
  let fixture: ComponentFixture<PrReviewdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrReviewdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrReviewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
