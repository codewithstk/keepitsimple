import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy {
	public subscriptions: Array<Subscription> = [];

	public ngOnDestroy() {
		this.subscriptions.forEach(s => s.unsubscribe());
	}
}
