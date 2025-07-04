import { Component, OnInit } from '@angular/core';
import { SVG_ICONS } from '../../../../../stk/src/public-api';

@Component({
	selector: 'app-icons',
	templateUrl: './icons.component.html',
	styleUrls: ['./icons.component.scss'],
	standalone: false
})
export class IconsComponent implements OnInit {
	public iconNames: string[] = [];

	public ngOnInit(): void {
		const icons = Object.entries(SVG_ICONS);
		this.iconNames = icons.map(x => x[0]);
	}
}
