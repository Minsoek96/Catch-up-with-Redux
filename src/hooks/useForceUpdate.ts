import {useCallback, useState} from 'react';

export default function useForceUpdate() {
	const [state, setState] = useState({});
	return useCallback(() => {
		setState({});
	}, [setState]);
}
