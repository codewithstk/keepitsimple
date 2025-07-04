import { Component } from '@angular/core';

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss'],
	standalone: false
})
export class ServicesComponent {
	public data1 = [
		{
			title: 'Consultanță și Evaluare:',
			details: [
				'Consultanță personalizată pentru alegerea materialelor potrivite.',
				'Evaluarea spațiului și măsurători precise pentru un montaj eficient.'
			]
		},
		{
			title: 'Prepararea Suprafeței:',
			details: [
				'Curățarea și nivelarea suprafețelor pentru un montaj uniform.',
				'Aplicarea de amorsă pentru aderență maximă.'
			]
		},
		{
			title: 'Montaj Gresie:',
			details: [
				'Instalarea profesională a gresiei pe pardoseală, pereți și scări.',
				'Montaj de gresie în diferite modele și dimensiuni.'
			]
		},
		{
			title: 'Montaj Faiantă:',
			details: [
				'Instalarea faianței în băi, bucătării și alte spații interioare.',
				'Montaj de faianță decorativă și mozaicuri.'
			]
		}
	];

	public data2 = [
		{
			title: 'Servicii de Hidroizolație:',
			details: [
				'Aplicarea de straturi de hidroizolație pentru băi și bucătării.',
				'Soluții de protecție împotriva umezelii și mucegaiului.'
			]
		},
		{
			title: 'Reparații și Recondiționări:',
			details: [
				'Reparații și înlocuirea plăcilor deteriorate.',
				'Reîmprospătarea și recondiționarea suprafețelor vechi.'
			]
		},
		{
			title: 'Lucrări de Finisaje:',
			details: [
				'Aplicarea de chituri și sigilanți pentru un aspect perfect și durabil.',
				'Finisaje de colțuri și margini cu profile speciale.'
			]
		},
		{
			title: 'Servicii Specializate:',
			details: [
				'Montaj de plăci mari și de formate atipice.',
				'Soluții personalizate pentru spații comerciale și rezidențiale.'
			]
		}
	];
}
