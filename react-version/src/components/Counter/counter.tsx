import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'
import { counterState } from './ICounterState'

interface CounterProps {
	state: counterState
	setState: Dispatch<SetStateAction<counterState>>
}

export const Counter: React.FunctionComponent<CounterProps> = (props) => {
	function increment(operationType: string) {
		const mutated_state = {
			...props.state,
			count: props.state.count,
			totalOperations: props.state.totalOperations + 1,
		}

		if (operationType === '+') mutated_state.count++
		else if (operationType === '-')
			mutated_state.count > 0
				? mutated_state.count--
				: (mutated_state.count = 0)
		else mutated_state.count = 0

		props.setState(mutated_state)
	}
	return (
		<div>
			<h2>{props.state.count}</h2>
			<h3>{props.state.totalOperations}</h3>
			<button onClick={() => increment('+')}> + </button>
			<button onClick={() => increment('r')}> r </button>
			<button onClick={() => increment('-')}> - </button>
		</div>
	)
}
