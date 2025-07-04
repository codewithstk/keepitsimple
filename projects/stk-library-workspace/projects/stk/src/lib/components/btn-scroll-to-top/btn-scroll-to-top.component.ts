import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StkIconComponent } from '../icon/icon.component';

@Component({
	selector: 'stk-btn-scroll-to-top',
	templateUrl: './btn-scroll-to-top.component.html',
	styleUrls: ['./btn-scroll-to-top.component.scss'],
	imports: [StkIconComponent],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StkBtnScrollToTopComponent {
	@Input()
	public rootContentElement!: HTMLElement;

	public scrollToTop() {
		const scrollableContent = this.rootContentElement ?? window;
		scrollableContent.scrollTo({ top: 0, behavior: 'smooth' });
	}
}
