import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StkDOMtHelperService {
	private renderer: Renderer2;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		protected rendererFactory: RendererFactory2
	) {
		this.renderer = rendererFactory.createRenderer(document, null);
	}

	public toggleDocumentScroll(isActive: boolean, overflowValue = 'auto') {
		if (isActive) {
			this.renderer.setStyle(this.document.body, 'overflow', overflowValue);
		} else {
			this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
		}
	}
}
