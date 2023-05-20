import TaskComponent from "./TaskComponent";

export default function OverviewComponent({tasks, deleteFn, saveFn}) {

    
    const taskList = tasks.map((task,index) => {
        return (
            <div key={index} >
                <TaskComponent task={task} index={index} deleteFn={deleteFn} saveFn={saveFn}/>
            </div>
        );
    });

    return (
        <>
            <ul>
                {taskList}
            </ul>
        </>
    )
}