import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGiohangComponent } from './dialog-giohang.component';

describe('DialogGiohangComponent', () => {
  let component: DialogGiohangComponent;
  let fixture: ComponentFixture<DialogGiohangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGiohangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGiohangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
