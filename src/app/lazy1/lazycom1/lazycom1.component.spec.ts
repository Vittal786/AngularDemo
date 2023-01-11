import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazycom1Component } from './lazycom1.component';

describe('Lazycom1Component', () => {
  let component: Lazycom1Component;
  let fixture: ComponentFixture<Lazycom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazycom1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lazycom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
