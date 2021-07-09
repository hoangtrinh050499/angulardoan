import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachproductComponent } from './danhsachproduct.component';

describe('DanhsachproductComponent', () => {
  let component: DanhsachproductComponent;
  let fixture: ComponentFixture<DanhsachproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
