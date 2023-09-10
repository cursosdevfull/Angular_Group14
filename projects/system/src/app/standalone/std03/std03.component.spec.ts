import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03Component } from './std03.component';

describe('Std03Component', () => {
  let component: Std03Component;
  let fixture: ComponentFixture<Std03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Std03Component]
    });
    fixture = TestBed.createComponent(Std03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
