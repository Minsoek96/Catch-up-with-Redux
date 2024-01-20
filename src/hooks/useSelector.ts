import {useEffect, useRef, useState} from 'react';

import {container} from 'tsyringe';

import useForceUpdate from './useForceUpdate';

import {CounterStore, type State} from '../stores/CounterStore';

type Selector<T> = (state: State) => T;
export default function useSelector<T>(selector: Selector<T>): T {
	const store = container.resolve(CounterStore);

	const state = useRef(selector(store.state));

	const forceUpdate = useForceUpdate();

	useEffect(() => {
		const update = () => {
			// Selectore의 결과가 객체인 경우 처리 필요함.
			const newState = selector(store.state);
			if (newState !== state.current) {
				forceUpdate();
				state.current = newState;
			}
		};

		store.addListener(update);

		return () => {
			store.removeListener(update);
		};
	}, [forceUpdate, store]);

	return selector(store.state);
}
