import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp01Component } from './comp01.component';

describe('Comp01Component', () => {
  let component: Comp01Component;
  let fixture: ComponentFixture<Comp01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comp01Component]
    });
    fixture = TestBed.createComponent(Comp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
