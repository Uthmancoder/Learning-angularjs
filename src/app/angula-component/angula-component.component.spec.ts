import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulaComponentComponent } from './angula-component.component';

describe('AngulaComponentComponent', () => {
  let component: AngulaComponentComponent;
  let fixture: ComponentFixture<AngulaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngulaComponentComponent]
    });
    fixture = TestBed.createComponent(AngulaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
