import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02Component } from './std02.component';

describe('Std02Component', () => {
  let component: Std02Component;
  let fixture: ComponentFixture<Std02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Std02Component]
    });
    fixture = TestBed.createComponent(Std02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
