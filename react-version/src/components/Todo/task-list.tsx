import { Dispatch, SetStateAction } from 'react'
import { Card } from 'react-bootstrap'
import { todoState } from './ITodoState'

interface ITaskList {
	state: todoState
	setState: Dispatch<SetStateAction<todoState>>
}

export const TaskList: React.FC<ITaskList> = (props) => {
	return (
		<div>
			{props.state.allTasks.map((task, i) => (
				<Card
					key={i}
					style={{ padding: 8, marginTop: 8, marginBottom: 8 }}
				>
					TODO: {task}
				</Card>
			))}
		</div>
	)
}
