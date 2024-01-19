import {useCallback, useState} from 'react';

export default function useforceUpdate() {
	const [state, setState] = useState({});
	return useCallback(() => {
		setState({});
	}, []);
}

