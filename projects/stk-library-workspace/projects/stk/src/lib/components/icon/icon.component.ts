import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	SimpleChanges
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SVG_ICONS } from './svg-icons';

@Component({
	selector: 'stk-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StkIconComponent implements OnChanges {
	@Input()
	public name!: string;

	public iconSvg: SafeHtml = '';

	public svgIcon: SafeHtml | null = null;

	constructor(private sanitizer: DomSanitizer) {}

	public ngOnChanges(changes: SimpleChanges) {
		const name = changes['name']?.currentValue as string;
		if (name) {
			const rawSvg = SVG_ICONS[name];
			if (rawSvg) {
				this.iconSvg = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
			}
		}
	}
}
