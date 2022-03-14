import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    // C - create
    // R - read
    // U - update
    // D - delete
    // BLL:
    const todoListTitle_1: string = "What to learn"
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS/ES6", isDone: true},
        {id: v1(), title: "React", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>("all")

    const removeTask = (id: string) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        /*  const copy = [...tasks]
          copy.unshift(newTask)*/
        setTasks([newTask, ...tasks])
    }

    const changeFilter = (filter: FilterValuesType) => setFilter(filter)

    let tasksForTodoList;
    switch (filter) {
        case "active":
            tasksForTodoList = tasks.filter(t => t.isDone === false)
            break
        case "completed":
            tasksForTodoList = tasks.filter(t => t.isDone === true)
            break
        default:
            tasksForTodoList = tasks
    }

// UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={tasksForTodoList}
                removeTasks={removeTask}
                addTask={addTask}
                changeFilter={changeFilter}

            />
        </div>
    );
}

export default App;
