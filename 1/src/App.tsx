import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
	const [isFirst, setIsFirst] = useState(true);

	return (
		<>
			<div className="card">
				<button onClick={() => setIsFirst((value) => !value)}>Switch counter</button>
			</div>
			<div className="card">
				{isFirst ? <Counter name="First" /> : <Counter name="Second" />}
			</div>
		</>
	);
}

export default App;
