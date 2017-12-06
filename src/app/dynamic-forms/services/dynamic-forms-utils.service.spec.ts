import { TestBed, inject } from '@angular/core/testing';

import { DynamicFormsUtilsService } from './dynamic-forms-utils.service';

describe('DynamicFormsUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicFormsUtilsService]
    });
  });

  it('should be created', inject([DynamicFormsUtilsService], (service: DynamicFormsUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
