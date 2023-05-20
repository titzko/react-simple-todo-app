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

	return (
		<div className="App">
			<header className="App-header">
				<div className="mt-5">
					<form onSubmit={submitTask} style={{"display": "flex", "justifyContent": "space-around"}}>
					<label htmlFor="task">Task</label>
					<input id="task"
					 value={task}
					 onChange={(event) => setTask(event.target.value)}
					 />
					<button type="submit">Add Task</button>
					</form>
					<OverviewComponent tasks={tasks} />
				</div>
			</header>
		</div>
	);
}

export default App;
