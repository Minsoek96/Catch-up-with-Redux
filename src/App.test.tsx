import {fireEvent, getByAltText, render, screen} from '@testing-library/react';

import App from './App';
import {container} from 'tsyringe';

const context = describe;

describe('App', () => {
	beforeEach(() => {
		container.clearInstances();
	});

	context('when press increase btn once', () => {
		test('counter', () => {
			render(<App/>);
			fireEvent.click(screen.getByText('Increase'));
			const element = screen.getAllByText('Counter: 1');
			expect(element).toHaveLength(2);
		});
	});

	context('when press increase btn twice', () => {
		test('counter', () => {
			render(<App/>);
			fireEvent.click(screen.getByText('Increase'));
			fireEvent.click(screen.getByText('Increase'));
			const element = screen.getAllByText('Counter: 2');
			expect(element).toHaveLength(2);
		});
	});
});
