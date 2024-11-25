import { useState } from 'react';
import './App.css';
import { initialState } from './utils';

function App() {
	const [count, setCount] = useState(initialState());

	return (
		<>
			<p>count is {count}</p>
			<button onClick={() => setCount((value) => value + 1)}>increment</button>
		</>
	);
}

export default App;
