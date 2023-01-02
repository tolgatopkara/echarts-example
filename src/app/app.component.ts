import { Component } from '@angular/core';
import { ChartComponent } from "./chart/chart.component";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `<app-chart></app-chart> `,
    imports: [ChartComponent]
})
export class AppComponent {
  title = 'echarts-example';
}
