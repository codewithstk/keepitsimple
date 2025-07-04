import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from '@angular/core';
export declare class StkClickOutsideDirective {
	private elementRef;
	readonly clickOutside: EventEmitter<MouseEvent>;
	constructor(elementRef: ElementRef<HTMLElement>);
	onClick(event: MouseEvent, targetElement: HTMLElement): void;
	static ɵfac: i0.ɵɵFactoryDeclaration<StkClickOutsideDirective, never>;
	static ɵdir: i0.ɵɵDirectiveDeclaration<
		StkClickOutsideDirective,
		'[stkClickOutside]',
		never,
		{},
		{ clickOutside: 'clickOutside' },
		never,
		never,
		true,
		never
	>;
}
//# sourceMappingURL=click-outside.directive.d.ts.map
