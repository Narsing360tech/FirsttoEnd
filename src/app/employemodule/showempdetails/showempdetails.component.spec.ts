import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowempdetailsComponent } from './showempdetails.component';

describe('ShowempdetailsComponent', () => {
  let component: ShowempdetailsComponent;
  let fixture: ComponentFixture<ShowempdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowempdetailsComponent]
    });
    fixture = TestBed.createComponent(ShowempdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
