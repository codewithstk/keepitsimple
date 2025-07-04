import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-section-title',
	templateUrl: './section-title.component.html',
	styleUrls: ['./section-title.component.scss'],
	standalone: false
})
export class SectionTitleComponent {
	@Input()
	public sectionText!: string;

	@Input()
	public heading!: string;

	@Input()
	public description!: string;
}
