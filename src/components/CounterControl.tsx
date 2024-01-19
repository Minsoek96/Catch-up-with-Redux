import {useCallback, useEffect, useState} from 'react';
import {container} from 'tsyringe';
import {Store} from '../stores/Store';

const state = {
	count: 0,
};

const useforceUpdate = () => {
	const [state, setState] = useState({});
	return useCallback(() => {
		setState({});
	}, []);
};

const useStore = () => {
	const currentStore = container.resolve(Store);
	const forceUpdate = useforceUpdate();

	useEffect(() => {
		currentStore.addListner(forceUpdate);
		return () => {
			currentStore.removeListner(forceUpdate);
		};
	}, [currentStore, forceUpdate]);

	return currentStore;
};

export default function CounterControl() {
	const store = useStore();

	const handleCouterIncrease = () => {
		store.increase();
	};

	const handleCouterDecrease = () => {
		store.decrease();
	};

	return (
		<div>
			<p>{store.count}</p>
			<button type={'button'} onClick={handleCouterIncrease}>Increase</button>
			<button type={'button'} onClick={handleCouterDecrease}>Decrease</button>
		</div>
	);
}
