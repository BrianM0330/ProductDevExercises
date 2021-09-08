import { Dispatch, SetStateAction } from 'react'
import { todoState } from './ITodoState'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from 'react-bootstrap'

type formInput = {
	taskInput: string
}

interface INewTaskprops {
	state: todoState
	setState: Dispatch<SetStateAction<todoState>>
}

export const NewTask: React.FunctionComponent<INewTaskprops> = (props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<formInput>()

	//Kind of bad. Pushing to allTasks returns a number, so I'm storing it in totalTasks.
	const onSubmit: SubmitHandler<formInput> = (data) => {
		const mutated = {
			...props.state,
			totalTasks: props.state.allTasks.push(data.taskInput),
		}

		props.setState(mutated)
		reset()
	}

	return (
		<div>
			<h4> Create a new task here!</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					{...register('taskInput', { required: true })}
				/>
				<h2>{errors.taskInput && 'Cannot be empty!'} </h2>
				<Button type="submit"> Submit Task </Button>
			</form>
		</div>
	)
}
