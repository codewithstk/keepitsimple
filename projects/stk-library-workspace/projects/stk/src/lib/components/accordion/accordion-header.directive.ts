import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[stkAccordionHeader]',
	standalone: false
})
export class StkAccordionHeaderDirective {
	constructor(public templateRef: TemplateRef<unknown>) {}
}
