import { ChangeDetectorRef, OnInit } from '@angular/core';
import * as i0 from '@angular/core';
export declare class TextDecryptedComponent implements OnInit {
	private readonly cdr;
	text: string;
	displayText: string;
	private readonly characters;
	private intervalId;
	constructor(cdr: ChangeDetectorRef);
	ngOnInit(): void;
	private startFuzzyEffect;
	static ɵfac: i0.ɵɵFactoryDeclaration<TextDecryptedComponent, never>;
	static ɵcmp: i0.ɵɵComponentDeclaration<
		TextDecryptedComponent,
		'stk-text-decrypted',
		never,
		{ text: { alias: 'text'; required: false } },
		{},
		never,
		never,
		true,
		never
	>;
}
//# sourceMappingURL=text-decrypted.component.d.ts.map
