import { trigger, style, transition, animate} from '@angular/animations';

export const SlideInOutAnimation = [
	trigger('slideInOut', [
		transition(':enter', [
			style({transform: 'translateY(-100%)'}),
			animate('200ms ease-in', style({transform: 'translateY(0%)'}))
		]),
		transition(':leave', [
			animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
		])
	])
]
