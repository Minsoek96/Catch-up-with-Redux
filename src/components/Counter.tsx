import {useStore} from '../hooks/useStore';

export default function Counter() {
	const store = useStore();
	return (
		<div>
			<p>{store.count}</p>
		</div>
	);
}
