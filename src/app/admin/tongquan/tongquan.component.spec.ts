import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TongquanComponent } from './tongquan.component';

describe('TongquanComponent', () => {
  let component: TongquanComponent;
  let fixture: ComponentFixture<TongquanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TongquanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TongquanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
