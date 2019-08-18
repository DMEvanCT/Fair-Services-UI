import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EastereggsComponent } from './easteregg.component';

describe('EastereggsComponent', () => {
  let component: EastereggsComponent;
  let fixture: ComponentFixture<EastereggsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastereggsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastereggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
