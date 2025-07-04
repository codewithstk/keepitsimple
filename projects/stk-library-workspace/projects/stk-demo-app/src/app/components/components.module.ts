import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { AccordionComponent } from './accordion/accordion.component';

import { StkAccordionModule } from '../../../../stk/src/public-api';

@NgModule({
	declarations: [AccordionComponent],
	imports: [CommonModule, ComponentsRoutingModule, StkAccordionModule]
})
export class ComponentsModule {}
