import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	Input,
	QueryList
} from '@angular/core';
import { merge, of, map } from 'rxjs';
import { StkAccordionItemComponent } from './accordion-item.component';
import { toggleTransition } from './private/accordition.animation';

@Component({
	selector: 'stk-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [toggleTransition],
	standalone: false
})
export class AccordionComponent implements AfterViewInit {
	@Input()
	public canMultiple = false;

	@ContentChildren(StkAccordionItemComponent)
	public items!: QueryList<StkAccordionItemComponent>;

	public expandedRows = new Set<number>();

	constructor(private readonly cdr: ChangeDetectorRef) {}

	public ngAfterViewInit() {
		merge(this.items.changes, of(this.items))
			.pipe(map(() => this.items.toArray()))
			.subscribe(items => {
				items.forEach((item, index) => {
					if (item.isExpanded) {
						this.expandedRows.add(index);
					}
				});
				this.cdr.detectChanges();
			});
	}

	public toggleState(item: StkAccordionItemComponent, index: number) {
		if (item.disabled) {
			return;
		}

		if (this.expandedRows.has(index)) {
			this.expandedRows.delete(index);
		} else {
			if (!this.canMultiple) {
				this.expandedRows.clear();
			}
			this.expandedRows.add(index);
		}
	}
}
