import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageproductclassComponent } from './imageproductclass.component';

describe('ImageproductclassComponent', () => {
  let component: ImageproductclassComponent;
  let fixture: ComponentFixture<ImageproductclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageproductclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageproductclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
