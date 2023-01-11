import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDisComponent } from './content-dis.component';

describe('ContentDisComponent', () => {
  let component: ContentDisComponent;
  let fixture: ComponentFixture<ContentDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
