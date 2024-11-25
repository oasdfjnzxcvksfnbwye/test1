import { useState } from 'react';

export default function Counter({ name }: { name: string }) {
	const [count, setCount] = useState(0);

	return (
		<button onClick={() => setCount((value) => value + 1)}>
			{name} count is {count}
		</button>
	);
}
