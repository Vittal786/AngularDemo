import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazycom2Component } from './lazycom2.component';

describe('Lazycom2Component', () => {
  let component: Lazycom2Component;
  let fixture: ComponentFixture<Lazycom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazycom2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lazycom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
