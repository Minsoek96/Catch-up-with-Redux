import {container} from 'tsyringe';
import useForceUpdate from '../hooks/useForceUpdate';
import {useEffect} from 'react';
import {CounterStore} from '../stores/CounterStore';

export default function useStore() {
	const store = container.resolve(CounterStore);
	const forceUpdate = useForceUpdate();
	useEffect(() => {
		store.addListener(forceUpdate);
		return () => {
			store.removeListener(forceUpdate);
		};
	}, [forceUpdate, store]);
	return store;
}
