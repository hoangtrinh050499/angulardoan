import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhphanComponent } from './thanhphan.component';

describe('ThanhphanComponent', () => {
  let component: ThanhphanComponent;
  let fixture: ComponentFixture<ThanhphanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhphanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhphanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
