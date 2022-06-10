import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercardsavingsComponent } from './numbercardsavings.component';

describe('NumbercardsavingsComponent', () => {
  let component: NumbercardsavingsComponent;
  let fixture: ComponentFixture<NumbercardsavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbercardsavingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbercardsavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
