import {
	animate,
	state,
	style,
	transition,
	trigger
} from '@angular/animations';

export const toggleTransition = trigger('contentExpansion', [
	state('expanded', style({ height: '*', opacity: 1, visibility: 'visible' })),
	state(
		'collapsed',
		style({ height: '0px', opacity: 0, visibility: 'hidden' })
	),
	transition(
		'expanded <=> collapsed',
		animate('200ms cubic-bezier(.37,1.04,.68,.98)')
	)
]);
