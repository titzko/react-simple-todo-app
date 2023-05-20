export default function OverviewComponent({tasks, deleteFn}) {

    const taskList = tasks.map((task,index) => {

        return (
            <div key={index} className="d-flex">
        <div>{index + 1}: {task}</div>
        <button onClick={()=>deleteFn({index})}>Delete</button>
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