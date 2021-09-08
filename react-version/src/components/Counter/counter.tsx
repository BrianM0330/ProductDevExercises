import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'
import { counterState } from './ICounterState'

interface CounterProps {
	state: counterState
	setState: Dispatch<SetStateAction<counterState>>
}

export const Counter: React.FunctionComponent<CounterProps> = (props) => {
	function increment(operationType: string) {
		const test = {
			...props.state,
			count: props.state.count,
			totalOperations: props.state.totalOperations + 1,
		}

		if (operationType === '+') test.count++
		else if (operationType === '-')
			test.count > 0 ? test.count-- : (test.count = 0)
		else test.count = 0

		console.log(test)
		props.setState(test)
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
