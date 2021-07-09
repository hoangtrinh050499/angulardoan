import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VandedaComponent } from './vandeda.component';

describe('VandedaComponent', () => {
  let component: VandedaComponent;
  let fixture: ComponentFixture<VandedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VandedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VandedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
