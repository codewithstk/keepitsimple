import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class SeoService {
	constructor(
		private meta: Meta,
		private title: Title
	) {}

	public setupSeoMetaData() {
		this.setupTitle();
		this.setupMetaDescription();
		this.setupMetaKeywords();
		this.setupMetaAuthor();
		this.setupMetaGeo();
	}

	private setupTitle() {
		const title =
			'Montaj Placi Ceramice, Gresie si Faianta in Cluj | Cluj-Napoca';
		this.title.setTitle(title);
	}

	private setupMetaDescription() {
		const content =
			'Specialisti in montaj placi ceramice, gresie si faianta - Echipa noastra profesionista va ofera servicii de inalta calitate pentru amenajarea interioara sau exterioara. Cu ani de experienta in domeniu, asiguram un montaj precis si estetic, punand accent pe atentia la detalii si calitatea lucrarilor noastre. Contactati-ne acum pentru a beneficia de solutii personalizate si preturi competitive pentru proiectul dumneavoastra.';
		this.meta.addTag({ name: 'description', content });
	}

	private setupMetaKeywords() {
		const content =
			'montaj placi ceramice cluj, gresie cluj, faianta cluj, servicii profesionale cluj, amenajare interioara cluj, amenajare exterioara cluj';
		this.meta.addTag({ name: 'keywords', content });
	}

	private setupMetaAuthor() {
		const content = 'Ceramic Art Montaj';
		this.meta.addTag({ name: 'author', content });
	}

	private setupMetaGeo() {
		const content1 = 'Cluj';
		this.meta.addTag({ name: 'geo.region', content: content1 });

		const content2 = 'Cluj';
		this.meta.addTag({ name: 'geo.placename', content: content2 });
	}
}
