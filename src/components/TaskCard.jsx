import { useContext } from "react";
import { taskContext } from "../context/TaskContext";


function TaskCard({task}) {

    const {deleteTask} = useContext(taskContext)

    return (
        <div key={task.id} className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <h2 className="text-gray-500 text-sm">{task.description}</h2>
            <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={()=> deleteTask(task.id)}>Eliminar</button>
        </div>

    );
}

export default TaskCard;