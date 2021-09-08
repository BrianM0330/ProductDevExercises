import { Dispatch, SetStateAction } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { calcState } from './ICalcState'

interface displayInput {
	input: string
}

interface DisplayProps {
	state: calcState
	setState: Dispatch<SetStateAction<calcState>>
}

//Far from my best work. Spent more energy on the other components, this one is rough..

export const Display: React.FunctionComponent<DisplayProps> = (props) => {
	const { register, handleSubmit, reset, setValue, getValues, watch } =
		useForm<displayInput>()

	function number_input(btn_input: string) {
		if (getValues('input').length <= 16) {
			setValue('input', getValues('input') + btn_input)
		} else window.alert('Too long!')
	}

	function operator(symbol: string) {
		if (getValues('input').length > 0) {
			props.state.currentOps.push(getValues('input'), symbol)

			reset()
		}
	}

	function clear() {
		const mutated = {
			...props.state,
			display: 0,
			operationStack: [],
		}
		props.setState(mutated)
		reset()
	}

	const onSubmit: SubmitHandler<displayInput> = (data) => {
		const mutated = {
			...props.state,
			display: eval(props.state.currentOps.join('') + data.input),
			currentOps: [],
		}
		props.setState(mutated)
		console.log(props.state)
		reset()
	}

	return (
		<div>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{props.state.display !== 0 ? props.state.display : <div />}
				<h4>
					{' '}
					{props.state.currentOps[0]} {props.state.currentOps[1]}
					{watch('input')}
				</h4>
				<input type="string" defaultValue=" " {...register('input')} />
				<Button
					style={{ padding: 8, marginLeft: 16, height: 'auto' }}
					type="submit"
				>
					Calculate
				</Button>

				<Button style={{ margin: 8 }} onClick={() => clear()}>
					CE
				</Button>
				<Container>
					<Col>
						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => number_input('1')}
						>
							1
						</Button>

						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => number_input('2')}
						>
							2
						</Button>

						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => number_input('3')}
						>
							3
						</Button>
					</Col>

					<Col>
						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => number_input('4')}
						>
							4
						</Button>

						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => number_input('5')}
						>
							5
						</Button>

						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => number_input('6')}
						>
							6
						</Button>
					</Col>

					<Col>
						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => number_input('7')}
						>
							7
						</Button>

						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => number_input('8')}
						>
							8
						</Button>

						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => number_input('9')}
						>
							9
						</Button>
					</Col>

					<Col>
						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => operator('+')}
						>
							+
						</Button>

						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => operator('-')}
						>
							-
						</Button>

						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => operator('*')}
						>
							*
						</Button>

						<Button
							style={{ margin: 8 }}
							type="button"
							onClick={() => operator('/')}
						>
							/
						</Button>
					</Col>
				</Container>
			</Form>
		</div>
	)
}
