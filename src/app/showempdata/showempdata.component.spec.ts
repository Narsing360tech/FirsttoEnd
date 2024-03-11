import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowempdataComponent } from './showempdata.component';

describe('ShowempdataComponent', () => {
  let component: ShowempdataComponent;
  let fixture: ComponentFixture<ShowempdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowempdataComponent]
    });
    fixture = TestBed.createComponent(ShowempdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
