import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    // C - create
    // R - read
    // U - update
    // D - delete
    // BLL:
    const todoListTitle_1: string = "What to learn"
const [tasks, setTasks] = useState([
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS/ES6", isDone: true},
    {id: 3, title: "React", isDone: false},
])

    const removeTask = (id: number) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks)
    }


// UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={tasks}
                removeTasks={removeTask}
            />
        </div>
    );
}

export default App;
