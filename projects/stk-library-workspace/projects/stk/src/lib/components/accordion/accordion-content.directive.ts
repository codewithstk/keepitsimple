import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[stkAccordionContent]',
	standalone: false
})
export class StkAccordionContentDirective {
	constructor(public templateRef: TemplateRef<unknown>) {}
}
