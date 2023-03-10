import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcomComponent } from './parentcom.component';

describe('ParentcomComponent', () => {
  let component: ParentcomComponent;
  let fixture: ComponentFixture<ParentcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
