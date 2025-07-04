import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { UtilitiesComponent } from './utilities/utilities.component';

@NgModule({
	declarations: [UtilitiesComponent],
	imports: [CommonModule, UtilitiesRoutingModule]
})
export class UtilitiesModule {}
