import { OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from '@angular/core';
export declare class StkIconComponent implements OnChanges {
	private sanitizer;
	name: string;
	iconSvg: SafeHtml;
	svgIcon: SafeHtml | null;
	constructor(sanitizer: DomSanitizer);
	ngOnChanges(changes: SimpleChanges): void;
	static ɵfac: i0.ɵɵFactoryDeclaration<StkIconComponent, never>;
	static ɵcmp: i0.ɵɵComponentDeclaration<
		StkIconComponent,
		'stk-icon',
		never,
		{ name: { alias: 'name'; required: false } },
		{},
		never,
		never,
		true,
		never
	>;
}
//# sourceMappingURL=icon.component.d.ts.map
