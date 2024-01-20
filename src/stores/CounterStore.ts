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

const reducers = {
	increase(state: State, action: Action<number>) {
		return {
			...state,
			count: state.count + (action.payload ?? 1),
		};
	},
	decrease(state: State, action: Action<number>) {
		return {
			...state,
			count: state.count - (action.payload ?? 1),
		};
	},
};

export function increase(step?: number) {
	return {type: 'increase', payload: step};
}

export function decrease() {
	return {type: 'increase'};
}

@singleton()
export class CounterStore extends BaseStore<State> {
	constructor() {
		super(initialState, reducers);
	}
}
