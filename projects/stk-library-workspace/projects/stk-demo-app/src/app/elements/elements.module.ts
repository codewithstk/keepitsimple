import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementsRoutingModule } from './elements-routing.module';
import { BadgesComponent } from './badges/badges.component';

@NgModule({
	declarations: [BadgesComponent],
	imports: [CommonModule, ElementsRoutingModule]
})
export class ElementsModule {}
