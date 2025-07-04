import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsRoutingModule } from './charts-routing.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
	declarations: [PieChartComponent],
	imports: [CommonModule, ChartsRoutingModule]
})
export class ChartsModule {}
