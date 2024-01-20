import {singleton} from 'tsyringe';
import {type Action, BaseStore} from './BaseStore';

export type State = {
	count: number;
	name: string;
};

const initialState: State = {
	count: 0,
	name: 'Tester',
};

function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'increase':
			return {
				...state,
				count: state.count + 1,
			};
		case 'decrease':
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
}

@singleton()
export class CounterStore extends BaseStore<State> {
	constructor() {
		super(initialState, reducer);
	}
}
