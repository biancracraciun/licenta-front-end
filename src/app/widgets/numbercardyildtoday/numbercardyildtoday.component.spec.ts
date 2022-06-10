import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercardyildtodayComponent } from './numbercardyildtoday.component';

describe('NumbercardyildtodayComponent', () => {
  let component: NumbercardyildtodayComponent;
  let fixture: ComponentFixture<NumbercardyildtodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbercardyildtodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbercardyildtodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
