import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrReviewlistComponent } from './pr-reviewlist.component';

describe('PrReviewlistComponent', () => {
  let component: PrReviewlistComponent;
  let fixture: ComponentFixture<PrReviewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrReviewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrReviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
