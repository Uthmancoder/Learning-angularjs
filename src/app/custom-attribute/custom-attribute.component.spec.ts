import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttributeComponent } from './custom-attribute.component';

describe('CustomAttributeComponent', () => {
  let component: CustomAttributeComponent;
  let fixture: ComponentFixture<CustomAttributeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAttributeComponent]
    });
    fixture = TestBed.createComponent(CustomAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
