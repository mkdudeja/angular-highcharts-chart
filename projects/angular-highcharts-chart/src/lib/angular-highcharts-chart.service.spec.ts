import { TestBed, inject } from '@angular/core/testing';

import { AngularHighchartsChartService } from './angular-highcharts-chart.service';

describe('AngularHighchartsChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularHighchartsChartService]
    });
  });

  it('should be created', inject([AngularHighchartsChartService], (service: AngularHighchartsChartService) => {
    expect(service).toBeTruthy();
  }));
});
