export default function OverviewComponent({tasks}) {

    const taskList = tasks.map((task,index) => {
        return (<li key={index}>{task}</li>);
    });

    return (
        <>
            <ul>
                {taskList}
            </ul>
        </>
    )
}