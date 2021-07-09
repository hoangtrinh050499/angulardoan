import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEmployeeComponent } from './customer-employee.component';

describe('CustomerEmployeeComponent', () => {
  let component: CustomerEmployeeComponent;
  let fixture: ComponentFixture<CustomerEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
