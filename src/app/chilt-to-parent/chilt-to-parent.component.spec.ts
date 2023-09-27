import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiltToParentComponent } from './chilt-to-parent.component';

describe('ChiltToParentComponent', () => {
  let component: ChiltToParentComponent;
  let fixture: ComponentFixture<ChiltToParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiltToParentComponent]
    });
    fixture = TestBed.createComponent(ChiltToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
