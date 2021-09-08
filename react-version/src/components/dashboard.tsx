import { useState } from 'react'
import { Calculator } from './Calculator/calculator'
import { calcState } from './Calculator/ICalcState'

import { Counter } from './Counter/counter'
import { counterState } from './Counter/ICounterState'

import { ToDo } from './Todo/todo'
import { todoState } from './Todo/ITodoState'

import { Card, Container, Nav, Navbar, Row } from 'react-bootstrap'
import '../App.css'

//Parent component, will control the state of all productivity components.
export const Dashboard: React.FunctionComponent = () => {
	const [calculator, setCalculator] = useState<calcState>({
		display: 0,
		lastInput: 0,
		currentOps: [],
	})

	const [counter, setCounter] = useState<counterState>({
		count: 0,
		totalOperations: 0,
	})

	const [todo, setTodo] = useState<todoState>({
		allTasks: [],
		completedTasks: [],
	})

	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand> Productivity Suite </Navbar.Brand>
				<Nav>
					<Nav.Link> Calculator </Nav.Link>
					<Nav.Link> Todo </Nav.Link>
					<Nav.Link> Counter </Nav.Link>
				</Nav>
			</Navbar>
			<Container fluid style={{ justifyContent: 'center' }}>
				<h2
					style={{
						marginTop: 16,
						fontWeight: 'bolder',
					}}
				>
					{' '}
					Welcome to the Productivity Suite!{' '}
				</h2>
			</Container>

			<Container style={{ marginTop: 8, flexDirection: 'row' }}>
				<Row>
					<Card style={{ width: '33%' }}>
						<Calculator
							state={calculator}
							setState={setCalculator}
						/>
					</Card>

					<Card style={{ width: '33%' }}>
						<Counter state={counter} setState={setCounter} />
					</Card>

					<Card style={{ width: '33%' }}>
						<ToDo state={todo} setState={setTodo} />
					</Card>
				</Row>
			</Container>
		</>
	)
}
