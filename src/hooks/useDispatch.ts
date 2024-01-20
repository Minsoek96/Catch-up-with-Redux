import {container} from 'tsyringe';

import {type Action} from '../stores/BaseStore';

import {CounterStore} from '../stores/CounterStore';

export default function useDispatch<Payload>() {
	const store = container.resolve(CounterStore);
	return (action: Action<Payload>) => {
		store.dispatch(action);
	};
}
