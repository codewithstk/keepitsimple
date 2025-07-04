import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_CONFIG } from '../_core/routes.config';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ROUTES_CONFIG.charts.pieChart.path
	},
	{
		path: ROUTES_CONFIG.charts.pieChart.path,
		component: PieChartComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ChartsRoutingModule {}
