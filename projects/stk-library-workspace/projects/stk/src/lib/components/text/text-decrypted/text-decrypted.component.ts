import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnInit
} from '@angular/core';

@Component({
	selector: 'stk-text-decrypted',
	imports: [],
	templateUrl: './text-decrypted.component.html',
	styleUrl: './text-decrypted.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextDecryptedComponent implements OnInit {
	@Input()
	public text = '';

	public displayText = '';

	private readonly characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	private intervalId!: unknown;

	constructor(private readonly cdr: ChangeDetectorRef) {}

	public ngOnInit(): void {
		this.startFuzzyEffect();
	}

	private startFuzzyEffect(): void {
		const finalText = this.text.split('');
		let currentIndex = 0;

		this.intervalId = setInterval(() => {
			this.displayText = finalText
				.map((char, i) => {
					if (i < currentIndex) {
						return char;
					}
					return this.characters.charAt(
						Math.floor(Math.random() * this.characters.length)
					);
				})
				.join('');

			currentIndex++;
			this.cdr.detectChanges();
			if (currentIndex > finalText.length) {
				clearInterval(this.intervalId as number);
			}
		}, 50);
	}
}
