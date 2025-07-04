import { EventEmitter } from '@angular/core';
import * as i0 from '@angular/core';
export declare class StkWindowSectionScrollSpyDirective {
	readonly sectionChange: EventEmitter<string>;
	headerHeightOffset: number;
	private currentSectionId;
	onScroll(_event: Event): void;
	private isSectionVisible;
	static ɵfac: i0.ɵɵFactoryDeclaration<
		StkWindowSectionScrollSpyDirective,
		never
	>;
	static ɵdir: i0.ɵɵDirectiveDeclaration<
		StkWindowSectionScrollSpyDirective,
		'[stkWindowSectionScrollSpy]',
		never,
		{ headerHeightOffset: { alias: 'headerHeightOffset'; required: false } },
		{ sectionChange: 'sectionChange' },
		never,
		never,
		true,
		never
	>;
}
//# sourceMappingURL=window-section-scroll-spy.directive.d.ts.map
