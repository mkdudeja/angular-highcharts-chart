import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHighchartsChartComponent } from './angular-highcharts-chart.component';

describe('AngularHighchartsChartComponent', () => {
  let component: AngularHighchartsChartComponent;
  let fixture: ComponentFixture<AngularHighchartsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularHighchartsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHighchartsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
