import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdateImportComponent } from './insert-update-import.component';

describe('InsertUpdateImportComponent', () => {
  let component: InsertUpdateImportComponent;
  let fixture: ComponentFixture<InsertUpdateImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertUpdateImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdateImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
