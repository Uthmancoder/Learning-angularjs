import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingUserComponent } from './getting-user.component';

describe('GettingUserComponent', () => {
  let component: GettingUserComponent;
  let fixture: ComponentFixture<GettingUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GettingUserComponent]
    });
    fixture = TestBed.createComponent(GettingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
