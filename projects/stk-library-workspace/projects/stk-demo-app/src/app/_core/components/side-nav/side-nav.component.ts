import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SideNavItem } from './side-nav-item.model';
import { SideNavItemComponent } from './side-nav-item/side-nav-item.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-side-nav',
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.scss'],
	imports: [SideNavItemComponent, CommonModule],
	standalone: true
})
export class SideNavComponent implements OnChanges {
	@Input()
	public data!: Array<SideNavItem>;

	public items: Array<SideNavItem> = [];

	public ngOnChanges(changes: SimpleChanges) {
		if (changes['data'].currentValue) {
			const items = changes['data'].currentValue as Array<SideNavItem>;

			const activeRoute = window.location.pathname;
			this.expandParentNodes(activeRoute, items);
			this.items = [...items];
		}
	}

	private expandParentNodes(
		activeRoute: string,
		nodes: Array<SideNavItem>,
		parentNode?: SideNavItem
	): void {
		for (const node of nodes) {
			if (node.route && activeRoute.startsWith(node.route) && parentNode) {
				parentNode.isExpanded = true;
			}

			if (node.children) {
				this.expandParentNodes(activeRoute, node.children, node);
			}
		}
	}
}
