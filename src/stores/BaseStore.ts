export type Action = {
	type: string;
};

type Reducer<State> = (state: State, action: Action) => State;
type Listner = () => void;

export class BaseStore<State> {
	state: State;
	// eslint-disable-next-line @typescript-eslint/parameter-properties
	reducer: Reducer<State>;

	listner = new Set<Listner>();
	constructor(initialState: State, reducer: Reducer<State>) {
		this.state = initialState;
		this.reducer = reducer;
	}

	dispatch(action: Action) {
		this.state = this.reducer(this.state, action);
		this.forceupdate();
	}

	forceupdate() {
		this.listner.forEach(listner => {
			listner();
		});
	}

	addListner(listner: Listner) {
		this.listner.add(listner);
	}

	removeListner(listner: Listner) {
		this.listner.delete(listner);
	}
}
