import { useState } from "react";

export default function TaskComponent({task, index, deleteFn, saveFn}) {
    const [isEditMode, changeMode] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task);

    function updateTask(index) {
        const i = index.index;
        saveFn(i, updatedTask);
        changeMode(!isEditMode);
    }

    return(
        <div>
            {!isEditMode ? (
                <div className="d-flex">
                    <div>{index + 1}: {task}</div>
                    <button onClick={()=>deleteFn({index})}>Delete</button>
                    <button onClick={()=>changeMode(!isEditMode)}>Edit</button>
                </div>
            ):(
                <div className="d-flex">
                    <form onSubmit={()=>updateTask({index})}>
                        <label>Update:</label>
                        <input 
                        value={updatedTask}
                        onChange={(event) => setUpdatedTask(event.target.value)}
                        />
                        <button type="button" onClick={()=>deleteFn({index})}>Delete</button>
                        <button onClick={()=>updateTask({index})}>Save</button>
                    </form>
                </div>
        )}
        </div>
    )
}