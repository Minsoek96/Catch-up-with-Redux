import {singleton} from 'tsyringe';

import {type Action, BaseStore} from './BaseStore';
type Listner = () => void;

const initialState = {
	count: 0,
	name: '',
};

export type State = typeof initialState;

const reducers = {
	 increase(state: State, action: Action) {
		return {
			...state,
			count: state.count + 1,
		};
	},
	decrease(state: State, action: Action) {
		return {
			...state,
			count: state.count - 1,
		};
	},
};

function reducer(state: State, action: Action) {
	const f = Reflect.get(reducers, action.type);
	if (!f) {
		return state;
	}

	return f(state, aciton);
}

export function increase() {
	return {type: 'increase'};
}

export function decrease() {
	return {type: 'decrease'};
}

@singleton()
export class Store extends BaseStore<State> {
	constructor() {
		super(initialState, reducer);
	}
}
