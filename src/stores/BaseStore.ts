
type Listener = () => void;

export type Action<Payload> = {
	type: string;
	payload?: Payload;
};

type Reducer<S, Payload> = (state: S, action: Action<Payload>) => S;

type Reducers<S> = Record<string, Reducer<S, any>>;

export class BaseStore<S> {
	state: S;

	reducer: Reducer<S, any>;

	listeners = new Set<Listener>();

	constructor(initialState: S, reducers: Reducers<S>) {
		this.state = initialState;

		this.reducer = (state: S, action: Action<any>) => {
			const reducer = Reflect.get(reducers, action.type);
			if (!reducer) {
				return state;
			}

			return reducer(state, action);
		};
	}

	dispatch(action: Action<any>) {
		this.state = this.reducer(this.state, action);
		this.forceUpdate();
	}

	forceUpdate() {
		this.listeners.forEach(listener => {
			listener();
		});
	}

	addListener(listener: Listener) {
		this.listeners.add(listener);
	}

	removeListener(listener: Listener) {
		this.listeners.delete(listener);
	}
}
