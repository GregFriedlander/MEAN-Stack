import { TestBed, inject } from '@angular/core/testing';

import { MyMathFunctionService } from './my-math-function.service';

describe('MyMathFunctionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyMathFunctionService]
    });
  });

  it('should be created', inject([MyMathFunctionService], (service: MyMathFunctionService) => {
    expect(service).toBeTruthy();
  }));
});
