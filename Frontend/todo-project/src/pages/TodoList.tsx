import axios from "axios";
import { useEffect, useState } from "react";

function ToDoList() {

    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        async function getToDoList() {
            try {
                console.log('Fetching data from http://backend:3333/toDos'); // Adicione este log
                const response = await axios.get('http://backend:3333/toDos');
                console.log(response);
                
                console.log('Data fetched:', response); // Adicione este log
                setToDoList(response.data);
            } catch (error) {
                console.log('Error fetching data:', error);
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