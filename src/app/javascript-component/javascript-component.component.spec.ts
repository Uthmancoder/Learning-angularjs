import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptComponentComponent } from './javascript-component.component';

describe('JavascriptComponentComponent', () => {
  let component: JavascriptComponentComponent;
  let fixture: ComponentFixture<JavascriptComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascriptComponentComponent]
    });
    fixture = TestBed.createComponent(JavascriptComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
