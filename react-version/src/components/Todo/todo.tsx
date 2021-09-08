import { Dispatch, SetStateAction } from 'react'
import { todoState } from './ITodoState'

import { NewTask } from './new-task'
import { TaskList } from './task-list'

interface ITodoProps {
	state: todoState
	setState: Dispatch<SetStateAction<todoState>>
}

export const ToDo: React.FC<ITodoProps> = (props) => {
	return (
		<div>
			<h3> Current Tasks </h3>
			<NewTask state={props.state} setState={props.setState} />
			<TaskList state={props.state} setState={props.setState} />
		</div>
	)
}
