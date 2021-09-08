import { Dispatch, SetStateAction } from 'react'
import { todoState } from './ITodoState'
import { useForm, SubmitHandler } from 'react-hook-form'

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

	const onSubmit: SubmitHandler<formInput> = (data, event) => {
		const mutated = {
			...props.state,
			totalTasks: props.state.allTasks.push(data.taskInput),
		}

		props.setState(mutated)
		reset()
	}

	return (
		<div>
			<h3> Create a new task here!</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					{...register('taskInput', { required: true })}
				/>
				<h2>{errors.taskInput && 'Cannot be empty!'} </h2>
				<input type="submit" />
			</form>
		</div>
	)
}
