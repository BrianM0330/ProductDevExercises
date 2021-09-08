import { useState } from 'react'
import { Calculator } from './Calculator/calculator'

//Parent component, will control the state of all productivity components.
export const Dashboard: React.FunctionComponent = () => {
	const [calculator, setCalculator] = useState({
		display: 0,
		operations: [],
	})

	const [counter, setCounter] = useState({
		count: 0,
		totalOperations: 0,
	})

	const [todo, setTodo] = useState({
		allTasks: [],
		completedTasks: [],
	})

	return (
		<div>
			<Calculator />
		</div>
	)
}
