import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'
import { Container, Row, Button, Col } from 'react-bootstrap'
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
		<Container>
			<Row>
				<Col>
					<h2>{props.state.count}</h2>
					<h3>{props.state.totalOperations}</h3>
				</Col>

				<Button style={{ margin: 8 }} onClick={() => increment('+')}>
					+
				</Button>
				<Button style={{ margin: 8 }} onClick={() => increment('r')}>
					Reset
				</Button>
				<Button style={{ margin: 8 }} onClick={() => increment('-')}>
					-
				</Button>
			</Row>
		</Container>
	)
}
