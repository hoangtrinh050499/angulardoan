import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportdetailComponent } from './importdetail.component';

describe('ImportdetailComponent', () => {
  let component: ImportdetailComponent;
  let fixture: ComponentFixture<ImportdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
