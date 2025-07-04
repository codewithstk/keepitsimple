import { Component, HostListener } from '@angular/core';
import { SeoService } from './services/seo.service';

@Component({
	standalone: false,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	public currentSectionId = 'acasa';

	public isScrollToTopVisible = false;

	constructor(private seoService: SeoService) {
		this.seoService.setupSeoMetaData();
	}

	@HostListener('window:scroll', [])
	public onWindowScroll() {
		this.isScrollToTopVisible = window.scrollY >= 500;
	}

	public onSectionChange(sectionId: string) {
		this.currentSectionId = sectionId;
	}
}
