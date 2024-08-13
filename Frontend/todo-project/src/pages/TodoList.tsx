import { useEffect, useState } from "react";

function ToDoList() {

    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        async function getToDoList() {
            try {
                console.log('Fetching data from http://backend:3333/toDos'); // Adicione este log
                const response = await fetch('http://backend:3333/toDos');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Data fetched:', data); // Adicione este log
                setToDoList(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getToDoList();
    }, []);

    return (
        <>
            <h1>Lista de Tarefas</h1>
            <div>
                {toDoList.map((toDo) => (
                    <div key={toDo}>{toDo}</div>
                ))}
            </div>
        </>
    )
}

export default ToDoList