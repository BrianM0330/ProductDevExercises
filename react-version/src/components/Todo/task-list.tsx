import { Dispatch, SetStateAction } from 'react'
import { Button, Card } from 'react-bootstrap'
import { array } from 'yargs'
import { todoState } from './ITodoState'

interface ITaskList {
	state: todoState
	setState: Dispatch<SetStateAction<todoState>>
}

export const TaskList: React.FC<ITaskList> = (props) => {
	function deleteTask(index: number) {
		var completed_tasks = props.state.completedTasks
		completed_tasks.push(props.state.allTasks[index])

		var deleted_arr = [...props.state.allTasks]
		deleted_arr.splice(index, 1)

		var mutated = {
			...props.state,
			allTasks: deleted_arr,
			completedTasks: completed_tasks,
		}

		props.setState(mutated)
	}

	return (
		<div>
			{props.state.allTasks.length >= 1 ? <h4> To-Do </h4> : <div> </div>}
			{props.state.allTasks.map((task, i) => (
				<div key={i}>
					<Card style={{ padding: 8, marginTop: 8, marginBottom: 8 }}>
						TODO: {task}
						<Button onClick={(e) => deleteTask(i)}> Delete </Button>
					</Card>
				</div>
			))}

			{props.state.completedTasks.length >= 1 ? (
				<h4>Completed Tasks</h4>
			) : (
				<div> </div>
			)}

			{props.state.completedTasks.map((task, i) => (
				<div>
					<Card
						style={{
							padding: 8,
							marginTop: 8,
							marginBottom: 8,
							textDecoration: 'line-through',
							backgroundColor: 'lightgray',
						}}
					>
						{task}
					</Card>
				</div>
			))}
		</div>
	)
}
