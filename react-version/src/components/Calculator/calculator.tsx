import { Dispatch, SetStateAction } from 'react'
import { Display } from './display'
import { calcState } from './ICalcState'

interface CalculatorProps {
	state: calcState
	setState: Dispatch<SetStateAction<calcState>>
}

export const Calculator: React.FunctionComponent<CalculatorProps> = (props) => {
	function update() {
		const test = { ...props.state, display: props.state.display + 1 }
		console.log(test.currentOps)
		props.setState(test)
	}

	return (
		<div>
			<h1> Calculator </h1>
			<Display state={props.state} setState={props.setState} />
		</div>
	)
}
