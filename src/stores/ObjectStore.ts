type Listner = () => void;

export class ObjectStore {
	private readonly listner = new Set<Listner>();

	addListner(listner: Listner) {
		this.listner.add(listner);
	}

	removeListner(listner: Listner) {
		this.listner.delete(listner);
	}

	protected forceupdate() {
		this.listner.forEach(listner =>
			listner,
		);
	}
}
