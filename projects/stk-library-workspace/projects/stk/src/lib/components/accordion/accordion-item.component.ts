import { Component, ContentChild, Input } from '@angular/core';
import { StkAccordionContentDirective } from './accordion-content.directive';
import { StkAccordionHeaderDirective } from './accordion-header.directive';
import { StkAccordionTitleDirective } from './accordion-title.directive';

@Component({
	selector: 'stk-accordion-item',
	template: '',
	styles: '',
	standalone: false
})
export class StkAccordionItemComponent {
	@Input()
	public title = '';

	@Input()
	public disabled = false;

	@Input()
	public isExpanded = false;

	@ContentChild(StkAccordionContentDirective)
	public content!: StkAccordionContentDirective;

	@ContentChild(StkAccordionTitleDirective)
	public customTitle!: StkAccordionTitleDirective;

	@ContentChild(StkAccordionHeaderDirective)
	public customHeader!: StkAccordionHeaderDirective;
}
