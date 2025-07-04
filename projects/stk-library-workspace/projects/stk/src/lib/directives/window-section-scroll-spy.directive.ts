import {
	Directive,
	EventEmitter,
	HostListener,
	Input,
	Output
} from '@angular/core';

//Can be used only on window scroll
@Directive({
	selector: '[stkWindowSectionScrollSpy]',
	standalone: true
})
export class StkWindowSectionScrollSpyDirective {
	@Output()
	public readonly sectionChange = new EventEmitter<string>();

	@Input()
	public headerHeightOffset!: number;

	private currentSectionId!: string;

	@HostListener('window:scroll', ['$event'])
	public onScroll(_event: Event) {
		const sections = document.querySelectorAll('section[id]');

		let activeSectionId: string | null = null;
		sections.forEach((section: Element) => {
			if (this.isSectionVisible(section as HTMLElement)) {
				activeSectionId = section.id;
			}
		});

		if (activeSectionId && activeSectionId !== this.currentSectionId) {
			this.currentSectionId = activeSectionId;
			this.sectionChange.emit(this.currentSectionId);
		}
	}

	private isSectionVisible(section: HTMLElement): boolean {
		const sectionTop = section.offsetTop - this.headerHeightOffset - 1;
		const sectionBottom = sectionTop + section.offsetHeight;
		const currentPosition = window.scrollY;
		return currentPosition >= sectionTop && currentPosition < sectionBottom;
	}
}
