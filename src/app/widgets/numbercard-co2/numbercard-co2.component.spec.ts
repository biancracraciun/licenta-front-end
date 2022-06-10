import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercardCO2Component } from './numbercard-co2.component';

describe('NumbercardCO2Component', () => {
  let component: NumbercardCO2Component;
  let fixture: ComponentFixture<NumbercardCO2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbercardCO2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbercardCO2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
