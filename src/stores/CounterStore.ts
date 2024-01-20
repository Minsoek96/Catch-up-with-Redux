import {singleton} from 'tsyringe';
type Listner = () => void;

@singleton()
export class CounterStore {
	count = 0;

	listner = new Set<Listner>();

	increase() {
		this.count += 1;
		this.forceupdate();
	}

	decrease() {
		this.count -= 1;
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
