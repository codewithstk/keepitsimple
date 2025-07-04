import { AfterViewInit, ChangeDetectorRef, QueryList } from '@angular/core';
import { StkAccordionItemComponent } from './accordion-item.component';
import * as i0 from '@angular/core';
export declare class AccordionComponent implements AfterViewInit {
	private readonly cdr;
	canMultiple: boolean;
	items: QueryList<StkAccordionItemComponent>;
	expandedRows: Set<number>;
	constructor(cdr: ChangeDetectorRef);
	ngAfterViewInit(): void;
	toggleState(item: StkAccordionItemComponent, index: number): void;
	static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
	static ɵcmp: i0.ɵɵComponentDeclaration<
		AccordionComponent,
		'stk-accordion',
		never,
		{ canMultiple: { alias: 'canMultiple'; required: false } },
		{},
		['items'],
		never,
		false,
		never
	>;
}
//# sourceMappingURL=accordion.component.d.ts.map
