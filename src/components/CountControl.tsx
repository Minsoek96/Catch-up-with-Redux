import {useEffect} from 'react';
import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';

export default function CountControl() {
	const dispatch = useDispatch();
	const count = useSelector(state => state.count);
	const name = useSelector(state => state.name);

	const handleClickIncrease = () => {
		dispatch({type: 'increase'});
	};

	const handleClickDecrease = () => {
		dispatch({type: 'decrease'});
	};

	useEffect(() => {
		console.log('render');
	}, [name]);

	return (
		<div>
			<p>{count}</p>
			<p>{name}</p>
			<button type={'button'} onClick={handleClickIncrease}>Increase</button>
			<button type={'button'} onClick={handleClickDecrease}>Decrease</button>
		</div>
	);
}
