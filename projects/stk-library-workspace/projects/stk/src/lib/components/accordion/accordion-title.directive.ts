import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[stkAccordionTitle]',
	standalone: false
})
export class StkAccordionTitleDirective {
	constructor(public templateRef: TemplateRef<unknown>) {}
}
