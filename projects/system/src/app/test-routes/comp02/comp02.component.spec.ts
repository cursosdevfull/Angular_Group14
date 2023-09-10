import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp02Component } from './comp02.component';

describe('Comp02Component', () => {
  let component: Comp02Component;
  let fixture: ComponentFixture<Comp02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comp02Component]
    });
    fixture = TestBed.createComponent(Comp02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
