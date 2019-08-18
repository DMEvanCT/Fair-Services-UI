import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolGatesComponent } from './vol-gates.component';

describe('VolGatesComponent', () => {
  let component: VolGatesComponent;
  let fixture: ComponentFixture<VolGatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolGatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolGatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
