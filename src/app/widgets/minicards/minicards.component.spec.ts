import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicardsComponent } from './minicards.component';

describe('MinicardsComponent', () => {
  let component: MinicardsComponent;
  let fixture: ComponentFixture<MinicardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinicardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinicardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
