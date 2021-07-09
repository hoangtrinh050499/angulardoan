import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartclassComponent } from './cartclass.component';

describe('CartclassComponent', () => {
  let component: CartclassComponent;
  let fixture: ComponentFixture<CartclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
