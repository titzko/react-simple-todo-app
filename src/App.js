import { useState } from "react";

import "./App.css";
import OverviewComponent from "./components/functional/OverviewComponent";

function App() {

	const [tasks, setTasks] = useState(Array(0));
	const [task, setTask] = useState("");


	function submitTask(event) {
		event.preventDefault();
		setTasks([...tasks, task])
		setTask('');
	}

	function save(i, updatedTask) {
		const updatedTasks = tasks.map((currentTask, index) => {
			if (index===i) {
				return updatedTask;
			} else {
				return currentTask;
			}
		})
		setTasks(updatedTasks);
	}

	function deleteTask(index) {
		const i = index.index
		setTasks([...tasks.slice(0,i), ...tasks.slice(i+1)]);
	}

	return (
		<div className="App">
			<header className="App-header">
				<div className="mt-5">
					<form onSubmit={submitTask} style={{"display": "flex", "justifyContent": "space-around"}}>
					<label htmlFor="task">Add Task</label>
					<input id="task"
					 value={task}
					 onChange={(event) => setTask(event.target.value)}
					 />
					<button type="submit">+</button>
					</form>
					<OverviewComponent tasks={tasks} deleteFn={deleteTask} saveFn={save} />
				</div>
			</header>
		</div>
	);
}

export default App;
