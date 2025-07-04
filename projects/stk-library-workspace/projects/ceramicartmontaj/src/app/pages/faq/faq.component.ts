import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-faq',
	templateUrl: './faq.component.html',
	styleUrls: ['./faq.component.scss'],
	standalone: false
})
export class FaqComponent implements OnInit {
	public data!: Array<{ question: string; answer: string }>;

	public ngOnInit() {
		this.initData();
	}

	private initData() {
		this.data = [
			{
				question: 'Care este diferența dintre gresie și faianță?',
				answer:
					'Gresia și faianța sunt ambele tipuri de plăci ceramice, dar diferența principală constă în densitatea lor. Gresia este mai densă și mai rezistentă, fiind potrivită pentru zone cu trafic intens, în timp ce faianța este mai puțin densă și se potrivește mai bine pentru spații mai puțin solicitante, precum pereții interiori.'
			},
			{
				question: 'Cum pot să întrețin gresia și faianța?',
				answer:
					'Curățați plăcile regulat cu detergenți blânzi și apă. Evitați substanțele chimice agresive care ar putea deteriora suprafața. Pentru faianță, puteți folosi și soluții de curățat special concepute pentru a menține strălucirea.'
			},
			{
				question:
					'Pot instala gresie și faianță pe cont propriu sau este recomandat să angajez un profesionist?',
				answer:
					'Dacă aveți experiență în lucrul cu materiale de construcție și unelte adecvate, puteți încerca să instalați gresia și faianța pe cont propriu. Cu toate acestea, pentru rezultate optime și pentru a evita problemele pe termen lung, este recomandat să angajați un profesionist, în special pentru proiecte mai complexe sau pentru a evita eventualele erori de instalare.'
			},
			{
				question:
					'Care este costul total al proiectului, inclusiv materialele?',
				answer:
					'Prețul final depinde de mai mulți factori, inclusiv tipul de plăci ceramice, dimensiunea spațiului, pregătirea suprafeței și altele. Pentru mai multe informații puteți sa ne contactați.'
			},
			{
				question: 'Ce materiale recomanzi pentru spațiul meu?',
				answer:
					'Recomandările pentru materiale depind de destinația spațiului (baie, bucătărie, living), nivelul de trafic, preferințele estetice și bugetul disponibil. Pentru mai multe informații puteți sa ne contactați.'
			},
			{
				question:
					'Cum se va gestiona evacuarea deșeurilor rezultate din proiect?',
				answer:
					'Majoritatea profesioniștilor se ocupă de evacuarea deșeurilor, dar este important să clarificați acest aspect înainte de începerea proiectului. Unele pot include costul evacuării în oferta lor, în timp ce alții pot percepe o taxă suplimentară.'
			}
		];
	}
}
