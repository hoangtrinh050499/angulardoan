import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkintypeclassComponent } from './skintypeclass.component';

describe('SkintypeclassComponent', () => {
  let component: SkintypeclassComponent;
  let fixture: ComponentFixture<SkintypeclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkintypeclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkintypeclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
