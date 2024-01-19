import {container} from 'tsyringe';
import {Store} from '../stores/Store';
import {useEffect} from 'react';
import useForceUpdate from './useForceUpdate';

export const useStore = () => {
	const currentStore = container.resolve(Store);
	const forceUpdate = useForceUpdate();

	useEffect(() => {
		currentStore.addListner(forceUpdate);
		return () => {
			currentStore.removeListner(forceUpdate);
		};
	}, [currentStore, forceUpdate]);

	return currentStore;
};
