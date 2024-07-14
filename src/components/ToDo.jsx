import { useState } from "react"

function ToDo(){
    const [toDos, setToDo] = useState([])
    const [value, setImputValues] = useState("")

    const addTodo = () => {
        setToDo([...toDos, value])
        setImputValues("")
    }

    return(
        <div className="toDo">
            <input type="text" value={value} onChange={(e) => setImputValues(e.target.value)}/>
            <button onClick={addTodo}>Adicionar tarefa</button>

            <ul> {toDos.map((toDo, index) => (
                <li key={index}>{toDo}</li>
            ))}
            </ul>
        </div>
    )

}

export default ToDo