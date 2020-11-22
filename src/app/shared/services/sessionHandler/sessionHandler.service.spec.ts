import { TestBed } from '@angular/core/testing';

import { SessionHandlerService } from './sessionHandler.service';

describe('SessionHandlerService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: SessionHandlerService = TestBed.get(SessionHandlerService);
		expect(service).toBeTruthy();
	});
});
