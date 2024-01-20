import {useEffect} from 'react';
import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';
import {decrease, increase} from '../stores/CounterStore';

export default function CountControl() {
	const dispatch = useDispatch();
	const count = useSelector(state => state.count);
	const name = useSelector(state => state.name);

	useEffect(() => {
		console.log('render');
	}, [name]);

	return (
		<div>
			<p>{count}</p>
			<p>{name}</p>
			<button type={'button'} onClick={() => {
				dispatch(increase());
			}}>Increase</button>
			<button type={'button'} onClick={() => {
				dispatch(increase(10));
			}}>Increase</button>
			<button type={'button'} onClick={() => {
				dispatch(decrease());
			}}>Decrease</button>
		</div>
	);
}
