import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairServicesComponent } from './fair-services.component';

describe('FairServicesComponent', () => {
  let component: FairServicesComponent;
  let fixture: ComponentFixture<FairServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
