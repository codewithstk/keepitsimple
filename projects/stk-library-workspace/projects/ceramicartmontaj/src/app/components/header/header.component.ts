import { Component, Input } from '@angular/core';
import { StkDOMtHelperService } from '../../../../../stk/src/public-api';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: false
})
export class HeaderComponent {
	@Input()
	public activeSectionId!: string;

	@Input()
	public rootContentIdentifier!: string;

	public isMobileMenuVisible = false;

	constructor(private stkDocumentHelpersService: StkDOMtHelperService) {}

	public openMenu() {
		this.isMobileMenuVisible = !this.isMobileMenuVisible;
		this.stkDocumentHelpersService.toggleDocumentScroll(
			!this.isMobileMenuVisible
		);
	}

	public onClickScroll(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			const headerOffset = 100;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
		this.closeMenu();
		this.stkDocumentHelpersService.toggleDocumentScroll(
			!this.isMobileMenuVisible
		);
	}

	public closeMenu() {
		if (this.isMobileMenuVisible) {
			this.isMobileMenuVisible = false;
		}
	}
}
