import { Dispatch, SetStateAction } from 'react'
import { Display } from './display'
import { calcState } from './ICalcState'

interface CalculatorProps {
	state: calcState
	setState: Dispatch<SetStateAction<calcState>>
}

export const Calculator: React.FunctionComponent<CalculatorProps> = (props) => {
	return (
		<div>
			<h4> Calculator </h4>
			<Display state={props.state} setState={props.setState} />
		</div>
	)
}
