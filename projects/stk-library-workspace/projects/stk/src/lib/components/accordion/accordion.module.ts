import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { StkIconComponent } from '../../../public-api';
import { AccordionComponent as StkAccordionComponent } from './accordion.component';
import { StkAccordionItemComponent as StkAccordionItemComponent } from './accordion-item.component';
import { StkAccordionContentDirective as StkAccordionContentDirective } from './accordion-content.directive';
import { StkAccordionTitleDirective as StkAccordionTitleDirective } from './accordion-title.directive';
import { StkAccordionHeaderDirective as StkAccordionHeaderDirective } from './accordion-header.directive';

const components = [
	StkAccordionComponent,
	StkAccordionItemComponent,
	StkAccordionContentDirective,
	StkAccordionTitleDirective,
	StkAccordionHeaderDirective
];

@NgModule({
	declarations: [...components],
	imports: [StkIconComponent, CommonModule, HammerModule],
	providers: [],
	exports: [...components]
})
export class StkAccordionModule {}
