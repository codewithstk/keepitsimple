import { Component, HostBinding, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	standalone: false
})
export class CardComponent {
	@Input()
	public padding = '16px';

	@Input()
	public maxWidth = '1110px';

	@HostBinding('style.padding')
	public get hostPadding(): string {
		return this.padding;
	}

	@HostBinding('style.max-width')
	public get hostMaxWidth(): string {
		return this.maxWidth;
	}
}
