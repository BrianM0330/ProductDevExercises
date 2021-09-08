import React, { Dispatch, SetStateAction, useEffect } from 'react'
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

export const Display: React.FunctionComponent<DisplayProps> = (props) => {
	const { register, reset } = useForm<displayInput>()

	function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length >= 16) window.alert('Number too long!')

		var mutated = {
			...props.state,
			lastInput: parseInt(e.target.value),
		}
		props.setState(mutated)
	}

	return (
		<div>
			{props.state.display === 0 ? (
				<p> Enter a value! </p>
			) : (
				<p>{props.state.display}</p>
			)}
			<Form autoComplete="off">
				<input
					type="number"
					{...register('input')}
					onChange={(e) => handleInput(e)}
				/>

				<Button
					style={{ margin: 8 }}
					onClick={() => {
						var mutated = {
							...props.state,
							display: 0,
							lastInput: 0,
						}
						props.setState(mutated)
						reset()
					}}
				>
					CE
				</Button>
			</Form>
			<Button
				onClick={() => {
					var mutated = {
						...props.state,
						display: props.state.display + props.state.lastInput,
					}
					props.setState(mutated)
				}}
				style={{ margin: 8 }}
			>
				+
			</Button>
			<Button
				onClick={() => {
					var mutated = {
						...props.state,
						display: props.state.display - props.state.lastInput,
					}
					props.setState(mutated)
				}}
				style={{ margin: 8 }}
			>
				-
			</Button>
			<Button
				onClick={() => {
					var mutated = {
						...props.state,
						display: props.state.lastInput * props.state.display,
					}
					props.setState(mutated)
				}}
				style={{ margin: 8 }}
			>
				*
			</Button>
			<Button
				onClick={() => {
					var mutated = {
						...props.state,
						display: props.state.lastInput / props.state.display,
					}
					props.setState(mutated)
				}}
				style={{ margin: 8 }}
			>
				/
			</Button>
		</div>
	)
}
