import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifehooksdemoComponent } from './lifehooksdemo.component';

describe('LifehooksdemoComponent', () => {
  let component: LifehooksdemoComponent;
  let fixture: ComponentFixture<LifehooksdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifehooksdemoComponent]
    });
    fixture = TestBed.createComponent(LifehooksdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
