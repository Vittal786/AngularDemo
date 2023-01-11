import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipescomComponent } from './pipescom.component';

describe('PipescomComponent', () => {
  let component: PipescomComponent;
  let fixture: ComponentFixture<PipescomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipescomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipescomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
