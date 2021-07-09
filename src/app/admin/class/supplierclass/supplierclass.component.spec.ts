import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierclassComponent } from './supplierclass.component';

describe('SupplierclassComponent', () => {
  let component: SupplierclassComponent;
  let fixture: ComponentFixture<SupplierclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
