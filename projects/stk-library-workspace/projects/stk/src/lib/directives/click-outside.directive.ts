import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Output
} from '@angular/core';

@Directive({
	selector: '[stkClickOutside]',
	standalone: true
})
export class StkClickOutsideDirective {
	@Output()
	public readonly clickOutside = new EventEmitter<MouseEvent>();

	constructor(private elementRef: ElementRef<HTMLElement>) {}

	@HostListener('document:click', ['$event', '$event.target'])
	public onClick(event: MouseEvent, targetElement: HTMLElement) {
		if (!targetElement) {
			return;
		}

		const clickedInside = this.elementRef.nativeElement.contains(targetElement);
		if (!clickedInside) {
			this.clickOutside.emit(event);
		}
	}
}
