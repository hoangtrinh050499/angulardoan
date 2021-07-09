import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionclassComponent } from './compositionclass.component';

describe('CompositionclassComponent', () => {
  let component: CompositionclassComponent;
  let fixture: ComponentFixture<CompositionclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
