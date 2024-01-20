import {useStore} from '../hooks/useStore';
import {type State} from '../stores/Store';

type Selector<T> = (state: State) => T;

export default function useSelector<T>(selector: Selector<T>): T {
	const store = useStore();
	return selector(store.state);
}
