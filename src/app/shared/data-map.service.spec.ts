import { TestBed } from '@angular/core/testing';

import { DataMapService } from './data-map.service';

describe('DataMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMapService = TestBed.get(DataMapService);
    expect(service).toBeTruthy();
  });
});
