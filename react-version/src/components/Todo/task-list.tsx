import { Dispatch, useEffect, SetStateAction } from 'react'
import { todoState } from './ITodoState'

interface ITaskList {
	state: todoState
	setState: Dispatch<SetStateAction<todoState>>
}

export const TaskList: React.FC<ITaskList> = (props) => {
	return (
		<div>
			{props.state.allTasks.map((task, i) => (
				<p key={i}>{task}</p>
			))}
		</div>
	)
}
