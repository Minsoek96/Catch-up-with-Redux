import {singleton} from 'tsyringe';
import {ObjectStore} from './ObjectStore';

@singleton()
export class Store extends ObjectStore {
	count = 0;

	increase() {
		this.count += 1;
		this.forceupdate();
	}

	decrease() {
		this.count -= 1;
		this.forceupdate();
	}
}
