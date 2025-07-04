import { StkAccordionContentDirective } from './accordion-content.directive';
import { StkAccordionHeaderDirective } from './accordion-header.directive';
import { StkAccordionTitleDirective } from './accordion-title.directive';
import * as i0 from '@angular/core';
export declare class StkAccordionItemComponent {
	title: string;
	disabled: boolean;
	isExpanded: boolean;
	content: StkAccordionContentDirective;
	customTitle: StkAccordionTitleDirective;
	customHeader: StkAccordionHeaderDirective;
	static ɵfac: i0.ɵɵFactoryDeclaration<StkAccordionItemComponent, never>;
	static ɵcmp: i0.ɵɵComponentDeclaration<
		StkAccordionItemComponent,
		'stk-accordion-item',
		never,
		{
			title: { alias: 'title'; required: false };
			disabled: { alias: 'disabled'; required: false };
			isExpanded: { alias: 'isExpanded'; required: false };
		},
		{},
		['content', 'customTitle', 'customHeader'],
		never,
		false,
		never
	>;
}
//# sourceMappingURL=accordion-item.component.d.ts.map
