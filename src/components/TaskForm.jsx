import { useState, useContext } from "react";
import { taskContext } from "../context/TaskContext";
function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { createTask }  = useContext(taskContext)



    const handleSummit = (e) => {
        e.preventDefault(); //evitamos que al hacer summit el form ejecute el recargado de toda la página
        createTask({
            title,
            description

        }); //metodo que viene del props

        setDescription(''); //limpiamos los formularios
        setTitle('');//limpiamos los formularios

    }



    return (
        <div className="max-w-md mx-auto">
        <form onSubmit={handleSummit} className="bg-slate-800 p-10 mb-4">
            <h1 className="text-2x1 font-bold text-white mb-3">Crea tu tarea</h1>
            <input
                type="text"
                placeholder="Escribe el titulo de la tarea"
                onChange={(e)=> setTitle(e.target.value)} 
                value={title}
                autoFocus
                className="bg-slate-300 p-3 w-full mb-2"/>
            <textarea
                type="text"
                placeholder="Escribe la descripcion"
                onChange={(e)=> setDescription(e.target.value)}
                value={description}
                className="bg-slate-300 p-3 w-full mb-2"></textarea>
            <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Guardar</button>

        </form>

        </div>
    );
}


export default TaskForm;