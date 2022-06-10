import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercardconsumeenergyComponent } from './numbercardconsumeenergy.component';

describe('NumbercardconsumeenergyComponent', () => {
  let component: NumbercardconsumeenergyComponent;
  let fixture: ComponentFixture<NumbercardconsumeenergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbercardconsumeenergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbercardconsumeenergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
