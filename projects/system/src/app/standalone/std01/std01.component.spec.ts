import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01Component } from './std01.component';

describe('Std01Component', () => {
  let component: Std01Component;
  let fixture: ComponentFixture<Std01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Std01Component]
    });
    fixture = TestBed.createComponent(Std01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
