import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkclassComponent } from './trademarkclass.component';

describe('TrademarkclassComponent', () => {
  let component: TrademarkclassComponent;
  let fixture: ComponentFixture<TrademarkclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
