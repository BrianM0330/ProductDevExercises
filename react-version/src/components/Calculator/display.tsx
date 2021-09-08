import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'
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
			operationStack: [],
		}
		props.setState(mutated)
		reset()
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				{props.state.display !== 0 ? props.state.display : <div />}
				<h4>
					{' '}
					{props.state.currentOps[0]} {props.state.currentOps[1]}
					{watch('input')}
				</h4>
				<div>
					<input
						type="string"
						defaultValue=" "
						{...register('input')}
					/>
					<button type="submit">Calculate</button>
				</div>
				<div>
					<button type="button" onClick={() => number_input('1')}>
						1
					</button>

					<button type="button" onClick={() => number_input('2')}>
						2
					</button>

					<button type="button" onClick={() => number_input('3')}>
						3
					</button>

					<button type="button" onClick={() => number_input('4')}>
						4
					</button>

					<button type="button" onClick={() => number_input('5')}>
						5
					</button>

					<button type="button" onClick={() => number_input('6')}>
						6
					</button>

					<button type="button" onClick={() => number_input('7')}>
						7
					</button>

					<button type="button" onClick={() => number_input('8')}>
						8
					</button>

					<button type="button" onClick={() => number_input('9')}>
						9
					</button>
				</div>
				<div>
					<button type="button" onClick={() => operator('+')}>
						+
					</button>

					<button type="button" onClick={() => operator('-')}>
						-
					</button>

					<button type="button" onClick={() => operator('*')}>
						*
					</button>

					<button type="button" onClick={() => operator('/')}>
						/
					</button>

					<button type="button" onClick={() => clear()}>
						CE
					</button>
				</div>
			</form>
		</div>
	)
}
