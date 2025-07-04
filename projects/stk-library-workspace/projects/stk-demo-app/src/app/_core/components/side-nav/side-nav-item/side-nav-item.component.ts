import { Component, Input } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterModule } from '@angular/router';
import { SideNavItem } from '../side-nav-item.model';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-side-nav-item',
	templateUrl: './side-nav-item.component.html',
	styleUrls: ['./side-nav-item.component.scss'],
	imports: [CommonModule, RouterModule],
	standalone: true
})
export class SideNavItemComponent {
	@Input()
	public item!: SideNavItem;

	@Input()
	public isFirstlevel!: boolean;

	public readonly matchOptions: IsActiveMatchOptions = {
		queryParams: 'ignored',
		matrixParams: 'ignored',
		paths: 'subset',
		fragment: 'ignored'
	};

	constructor(private router: Router) {}

	public toggleNode() {
		if (this.item.children) {
			this.item.isExpanded = !this.item.isExpanded;
		}
	}

	public async navigate() {
		if (this.item.route) {
			await this.router.navigateByUrl(this.item.route);
		}
	}
}
