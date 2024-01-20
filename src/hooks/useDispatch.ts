import {useStore} from '../hooks/useStore';
import {type Action} from '../stores/BaseStore';

export const useDispatch = () => {
	const store = useStore();
	return (action: Action) => {
		store.dispatch(action);
	};
};
