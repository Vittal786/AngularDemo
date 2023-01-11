import { TestBed } from '@angular/core/testing';
import { StudentdataserviceService } from './studentdataservice.service';

describe('StudentdataserviceService', () => {
  let service: StudentdataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentdataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
