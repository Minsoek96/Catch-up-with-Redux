import useStore from '../hooks/useStore';
import {type Action} from '../stores/BaseStore';

export default function useDispatch() {
	const store = useStore();
	return (action: Action) => {
		store.dispatch(action);
	};
}
