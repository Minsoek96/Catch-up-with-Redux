type Listener = () => void;

export type Action = {
	type: string;
};

type Reducer<S> = (state: S, action: Action) => S;

export class BaseStore<S> {
	state: S;

	listeners = new Set<Listener>();

	constructor(initialState: S, private readonly reducer: Reducer<S>) {
		this.state = initialState;
	}

	dispatch(action: Action) {
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
