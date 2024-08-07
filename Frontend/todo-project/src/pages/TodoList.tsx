import { useEffect, useState } from "react";

function ToDoList() {

    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        async function getToDoList() {
            const response = await fetch('http://localhost:3333/toDos');
            const data = await response.json();
            setToDoList(data)
        }
        getToDoList();
    }, []);

    return (
        <div>
            {toDoList.map((toDo) => (
                <div key={toDo}>{toDo}</div>
            ))}
        </div>
    )
}

export default ToDoList